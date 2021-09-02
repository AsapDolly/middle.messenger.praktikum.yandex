//language hbs
export default `
        <section class='signup'>

            <form class="signup__form" onSubmit={{handleSubmit}} noValidate>

                <h1 class="signup__title">Регистрация</h1>
                <div class="signup__input-list">

                    <div class="signup_input-group">
                        <label for="email" class="signup__input-label">Почта</label>
                        <input class="signup__input signup__input_email"
                               id="email"
                               name="email"
                               type="email"
                               required
                               minLength="2"
                               maxLength="40"
                        />
                        <div class="signup__input-label_error">{{errorEmail}}</div>
                    </div>                    
                    
                    <div class="signup_input-group">
                        <label for="login" class="signup__input-label">Логин</label>
                        <input class="signup__input"
                               id="login"
                               name="login"
                               type="text"
                               required
                               minLength="2"
                               maxLength="40"
                        />
                        <div class="signup__input-label_error">{{errorLogin}}</div>
                    </div>
                    
                    <div class="signup_input-group">
                        <label for="first_name" class="signup__input-label">Имя</label>
                        <input class="signup__input"
                               id="first_name"
                               name="first_name"
                               type="text"
                               required
                        />
                        <div class="signup__input-label_error">{{errorName}}</div>
                    </div>

                    <div class="signup_input-group">
                        <label for="second_name" class="signup__input-label">Фамилия</label>
                        <input class="signup__input"                           
                               id="second_name"
                               name="second_name"
                               type="text"
                               required
                        />
                        <div class="signup__input-label_error">{{errorLastname}}</div>
                    </div>
                    
                    <div class="signup_input-group">
                        <label for="phone" class="signup__input-label">Телефон</label>
                        <input class="signup__input"
                               id="phone"
                               name="phone"
                               type="text"
                               required
                        />
                        <div class="signup__input-label_error">{{errorPhone}}</div>
                    </div>

                    <div class="signup_input-group">
                        <label for="password" class="signup__input-label">Пароль</label>
                        <input class="signup__input signup__input_type_password"
                               id="password"
                               name="password"
                               type="password"
                               required
                               minLength="2"
                               maxLength="200"
                        />
                        
                    </div>
                    
                    <div class="signup_input-group">
                        <label for="password-repeat" class="signup__input-label">Пароль (ещё раз)</label>
                        <input class="signup__input signup__input_type_password"
                               id="password-repeat"
                               name="password-repeat"
                               type="password"
                               required
                               minLength="2"
                               maxLength="200"
                        />
                        <div class="signup__input-label_error">{{errorPassword}}</div>
                    </div>
                </div>

                <button class="signup__button" type="submit">
                      Зарегистрироваться
                </button>

                    <a href="#" class="signup__login-text_link">
                        Войти
                    </a>

            </form>

        </section>
`;
