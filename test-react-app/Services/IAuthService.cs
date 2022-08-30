﻿using elitstroy.Model;

namespace elitstroy.Services
{
    public interface IAuthService
    {
        AuthData GetAuthData(string id);
        string HashPassword(string password);
        bool VerifyPassword(string actualPassword, string hashedPassword);
    }
}