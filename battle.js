<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Management System</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
    <style>
        :root {
            --primary-color: #007bff;
            --secondary-color: #6c757d;
            --success-color: #28a745;
            --danger-color: #dc3545;
        }

        body {
            background-color: #f8f9fa;
            font-family: Arial, sans-serif;
        }

        .container {
            max-width: 600px;
        }

        .btn {
            transition: all 0.3s ease;
        }

        .btn:hover {
            transform: translateY(-2px);
        }

        .form-control {
            border-radius: 0.5rem;
        }

        h2 {
            color: var(--primary-color);
            margin-bottom: 20px;
        }

        .navbar {
            margin-bottom: 30px;
        }

        #profileSection {
            background: #fff;
            padding: 20px;
            border-radius: 0.5rem;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        #profileSection p {
            font-size: 1.2rem;
        }

        footer {
            margin-top: 40px;
            text-align: center;
            color: var(--secondary-color);
        }

        .card {
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 0.5rem;
            background-color: #fff;
        }
    </style>
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">User Management</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#" id="navLogin">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" id="navRegister">Register</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" id="navProfile">Profile</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container mt-5">
        <!-- Login Form -->
        <div id="loginForm" class="card d-block">
            <h2 class="text-center">Login</h2>
            <form id="loginFormElement">
                <div class="mb-3">
                    <label for="loginEmail" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="loginEmail" placeholder="Enter your email" required>
                </div>
                <div class="mb-3">
                    <label for="loginPassword" class="form-label">Password</label>
                    <input type="password" class="form-control" id="loginPassword" placeholder="Enter your password" required>
                </div>
                <button type="submit" class="btn btn-primary w-100">Login</button>
            </form>
        </div>

        <!-- Register Form -->
        <div id="registerForm" class="card d-none">
            <h2 class="text-center">Register</h2>
            <form id="registerFormElement">
                <div class="mb-3">
                    <label for="registerEmail" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="registerEmail" placeholder="Enter your email" required>
                </div>
                <div class="mb-3">
                    <label for="registerPassword" class="form-label">Password</label>
                    <input type="password" class="form-control" id="registerPassword" placeholder="Create a password" required>
                </div>
                <div class="mb-3">
                    <label for="confirmPassword" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="confirmPassword" placeholder="Confirm your password" required>
                </div>
                <button type="submit" class="btn btn-success w-100">Register</button>
            </form>
        </div>

        <!-- Profile Section -->
        <div id="profileSection" class="card d-none">
            <h2 class="text-center">Profile</h2>
            <p>Email: <span id="profileEmail">user@example.com</span></p>
            <button class="btn btn-danger" id="logoutBtn">Logout</button>
        </div>
    </div>

    <footer>
        <p>&copy; 2025 User Management System. All rights reserved.</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/script.js"></script>
    <script>
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const profileSection = document.getElementById('profileSection');

        document.getElementById('navLogin').addEventListener('click', () => {
            loginForm.classList.remove('d-none');
            registerForm.classList.add('d-none');
            profileSection.classList.add('d-none');
        });

        document.getElementById('navRegister').addEventListener('click', () => {
            registerForm.classList.remove('d-none');
            loginForm.classList.add('d-none');
            profileSection.classList.add('d-none');
        });

        document.getElementById('navProfile').addEventListener('click', () => {
            profileSection.classList.remove('d-none');
            loginForm.classList.add('d-none');
            registerForm.classList.add('d-none');
        });

        document.getElementById('logoutBtn').addEventListener('click', () => {
            alert('Logged out successfully!');
            loginForm.classList.remove('d-none');
            profileSection.classList.add('d-none');
        });

        // Form validation for Register
        document.getElementById('registerFormElement').addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('registerEmail').value;
            const password = document.getElementById('registerPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;

            if (!validateEmail(email)) {
                alert('Invalid email format.');
                return;
            }

            if (!validatePassword(password)) {
                alert('Password must be at least 8 characters long and include a number and a special character.');
                return;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                return;
            }

            alert('Registration successful!');
            document.getElementById('navLogin').click();
        });

        // Form validation for Login
        document.getElementById('loginFormElement').addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            if (!email || !password) {
                alert('Please fill in all fields.');
                return;
            }

            alert('Login successful!');
            document.getElementById('navProfile').click();
        });

        // Utility functions for validation
        function validateEmail(email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }

        function validatePassword(password) {
            const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
            return regex.test(password);
        }
    </script>
</body>
</html>
