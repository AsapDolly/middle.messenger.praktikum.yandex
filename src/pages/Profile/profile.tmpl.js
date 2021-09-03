//language hbs
export default `
        <section class='profile'>
        
        <div class="profile__panel">
            <button class="profile__panel-button"></button>
        </div>
        
        <div class="profile__popup profile__element_hidden">
            <div class="profile__popup-edit-avatar">
                <h2 class="profile__popup-edit-avatar-title">Загрузите файл</h2>
                <a class="profile__popup-edit-avatar-link">Выбрать файл на компьютере</a>
                <button class="profile__popup-edit-avatar-button">Поменять</button>
            </div>
            <div class="profile__popup-overlay"></div>
        </div>
        
            <form class='profile__form' onSubmit={{handleSubmit}} noValidatediv>
            
            <div class="profile__avatar-overlay">
                <p class="profile__avatar-overlay-title">Поменять аватар</p>
            </div>
            
            <div class="profile__avatar"></div>

                <h1 class="profile__title">{{display_name}}</h1>
                <div class="profile__input-list">

                    <label class="profile__input-label">
                        Почта
                        <input class="profile__input"
                               id="edit-email"
                               name="email"
                               type="email"
                               required
                               minLength="2"
                               maxLength="40"
                               readOnly="true"
                               value={{email}}
                        ></input>
                    </label>

                    <label class="profile__input-label">
                        Логин
                        <input class="profile__input"
                               id="login"
                               name="login"
                               type="text"
                               required
                               minLength="2"
                               maxLength="40"
                               readOnly="true"
                               value={{login}}
                        ></input>
                    </label>

                    <label class="profile__input-label">
                        Имя
                        <input class="profile__input"
                               id="first_name"
                               name="first_name"
                               type="text"
                               required
                               minLength="2"
                               maxLength="40"
                               readOnly="true"
                               value={{first_name}}
                        ></input>
                    </label>

                    <label class="profile__input-label">
                        Фамилия
                        <input class="profile__input"
                               id="second_name"
                               name="second_name"
                               type="text"
                               required
                               minLength="2"
                               maxLength="40"
                               readOnly="true"
                               value={{second_name}}
                        ></input>
                    </label>

                    <label class="profile__input-label">
                        Имя в чате
                        <input class="profile__input"
                               id="display_name"
                               name="display_name"
                               type="text"
                               required
                               minLength="2"
                               maxLength="40"
                               readOnly="true"
                               value={{display_name}}
                        ></input>
                    </label>

                    <label class="profile__input-label">
                        Телефон
                        <input class="profile__input"
                               id="phone"
                               name="phone"
                               type="text"
                               readOnly="true"
                               required
                               value={{phone}}
                        ></input>
                    </label>

                </div>
                
                <div class='profile__bottom-links'>
                    <a href="#" class="profile__input-label profile__link profile__link-change-data">
                        Изменить данные
                    </a>
                    
                    <a href="/PasswordChange.html" class="profile__input-label profile__link profile__link-change-password">
                        Изменить пароль
                    </a>
                    
                    <a href="/Login.html" class="profile__input-label profile__link profile__link-logout profile__link_red">
                        Выйти
                    </a>
                </div>

                <div class="profile__input-label_error">{{error}}</div>

                <button class='profile__save-button profile__element_hidden'>Сохранить</button>

            </form>

        </section>
`;
