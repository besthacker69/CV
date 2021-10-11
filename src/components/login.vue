<template>
    <v-container fluid style="margin-top:55px;">
        <v-row>
            <v-col
                style="height:calc(100vh - 55px - 55px); overflow:auto;"
                class="mt-n3 d-flex flex-column align-center justify-center"
            >
                <v-card class="pa-8" width="300">
                    <h2 class="text-h4 py-8 text-center">Login</h2>
                    <v-form ref="form">
                        <v-text-field
                            outlined
                            label="Username"
                            v-model="login.username"
                            :rules="[
                                v => !!v || 'Wajib Diisi!',
                            ]"
                            color="primary"
                            :error-messages="loginError.username"
                            
                        />
                        <v-text-field
                            outlined
                            label="Password"
                            :type="login.showPassword ? 'text' : 'password'"
                            :append-icon="login.showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="login.showPassword = !login.showPassword"
                            v-model="login.password"
                            :rules="[
                                v => !!v || 'Wajib Diisi!',
                            ]"
                            color="primary"
                            :error-messages="loginError.password"
                        />
                        <v-btn 
                            large block 
                            color="primary" 
                            type="submit" 
                            v-on:click.prevent="loginProcess()" 
                            :loading="login.loading"
                        >	
                            Masuk
                        </v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Cookies from 'js-cookie';
export default {
	props: ['user'],
    data() {
        return {
            login: {
				username:null,
				password:null,
				showPassword:null,
				loading:false
			},
			loginError: {
				username: null,
				password: null
			},
        }
    },
    methods: {
        loginProcess: async function(){
                this.loginError.username = null;
                this.loginError.password = null;
            if (this.$refs.form.validate()) {
                this.login.loading = true
                var formdata = {
                    username: this.login.username,
                    password: this.login.password
                }

                await this.$api.post('/session', formdata)
                    .then(response => {
                        Cookies.set('access_token', response.data.access_token, {
                            expires: response.data.expires_in,
                        });

                        Cookies.set('refresh_token', response.data.refresh_token);
                        
                        if(response.data.status == 1){
                            this.user.name = this.login.username;
                            this.login.loading = false
                        } else{
                            this.loginError.username = response.data.message;
                            this.loginError.password = response.data.message;
                            this.login.loading = false
                        }
                    })
                    .catch (error => {
                        switch (error.response.status) {
                            case 422:
                                if (error.response.data.username) {
                                    this.loginError.username = error.response.data.username[0]
                                }

                                if (error.response.data.password) {
                                    this.loginError.password = error.response.data.password[0]
                                }
                                break;
                            case 401:
                                this.loginError.username = "Nama atau password tidak cocok";
                                this.loginError.password = "Nama atau password tidak cocok";

                                break;
                            default:
                                this.alert.active = true;
                                this.alert.text = 'Fatal Error!';
                                break;
                        }
                    })
            }
        }
    }
}
</script>

<style>

</style>