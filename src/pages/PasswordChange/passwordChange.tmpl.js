//language hbs
export default `
        <section class='password-change'>
        
            <form class='password-change__form' onSubmit={{handleSubmit}} noValidatediv>
            
            <div class="password-change__avatar"></div>

                <h1 class="password-change__title">{{display_name}}</h1>
                <div class="password-change__input-list">

                    <label class="password-change__input-label">
                        Старый пароль
                        <input class="password-change__input"
                               id="old-password"
                               name="old-password"
                               type="password"
                               required
                        ></input>
                    </label>

                    <label class="password-change__input-label">
                        Новый пароль
                        <input class="password-change__input"
                               id="new-password"
                               name="new-password"
                               type="password"
                               required
                        ></input>
                    </label>

                    <label class="password-change__input-label">
                        Повторите новый пароль
                        <input class="password-change__input"
                               id="new-password-repeat"
                               name="new-password-repeat"
                               type="password"
                               required
                        ></input>
                    </label>

                </div>

                <div class="password-change__input-label_error">{{error}}</div>

                <button class='password-change__save-button'>Сохранить</button>

            </form>

        </section>
`;
