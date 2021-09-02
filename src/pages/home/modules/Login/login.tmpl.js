//language hbs
export default `
        <section class='login'>

            <form class="login__form" onSubmit={{handleSubmit}} noValidate>
                <h1 class="login__title">Вход</h1>
                
                <div class="login__input-list">

                    <div class="login_input-group">
                        <label for="login" class="login__input-label">Логин</label>
                        <input class="login__input login__input_type_login"
                               id="login"
                               name="login"
                               type="text"
                               required
                               minLength="2"
                               maxLength="40"
                        />
                        <div class="login__input-label_error">{{error_login}}</div>
                    </div>

                    <div class="login_input-group">
                        <label for="login-password" class="login__input-label">Пароль</label>
                        <input class="login__input login__input_type_password"
                               id="login-password"
                               name="password"
                               type="password"
                               required
                               minLength="2"
                               maxLength="200"
                        />
                        <div class="login__input-label_error">{{error_password}}</div>
                    </div>

                </div>

                <button class="login__button" type="submit">Авторизироваться</button>

                    <a href="#" class="login__signin-text_link">
                        Зарегистрироваться
                    </a>

            </form>

        </section>
`;
