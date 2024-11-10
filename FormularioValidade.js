function validateForm() {
            // Limpar mensagens de erro anteriores
            document.getElementById('nameError').textContent = '';
            document.getElementById('emailError').textContent = '';
            document.getElementById('passwordError').textContent = '';
            document.getElementById('confirmPasswordError').textContent = '';

            // Capturar valores dos campos
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            let isValid = true;

            // Validação do campo Nome
            if (name === '') {
                document.getElementById('nameError').textContent = 'O nome é obrigatório.';
                isValid = false;
            }

            // Validação do campo Email
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === '') {
                document.getElementById('emailError').textContent = 'O email é obrigatório.';
                isValid = false;
            } else if (!emailPattern.test(email)) {
                document.getElementById('emailError').textContent = 'Por favor, insira um email válido.';
                isValid = false;
            }

            // Validação do campo Senha
            if (password.length < 8) {
                document.getElementById('passwordError').textContent = 'A senha deve ter no mínimo 8 caracteres.';
                isValid = false;
            } else if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
                document.getElementById('passwordError').textContent = 'A senha deve conter letras e números.';
                isValid = false;
            }

            // Validação do campo Confirmar Senha
            if (confirmPassword !== password) {
                document.getElementById('confirmPasswordError').textContent = 'As senhas não correspondem.';
                isValid = false;
            }

            return isValid;
        }