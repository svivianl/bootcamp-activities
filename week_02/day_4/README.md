# Encryption vs. Hashing
Encryption is a reversible process: If you encrypt your passwords, then the secret key will be on your server, and if you server is compromised, then the passwords can be decrypted very easily (so, it's pretty much as useless as not encrypting at all).

Hashing is a one-way process. A password can be converted to some unintelligible string (called the "digest"), but the process can never be reversed. To check if a user's log-in password matches the password that's been hashed, we just hash the login-password and check it against the stored hash.
