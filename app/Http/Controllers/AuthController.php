<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    // User registration method
    public function register(Request $request)
    {
        // Validate incoming request data
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|confirmed|min:6',
        ]);

        // Create a new user record in the database
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'role' => 'user', // default user role
            'status' => 1 // active user status
        ]);

        // Generate a personal access token for the newly registered user
        $token = $user->createToken('api_token')->plainTextToken;

        // Return the user data along with the token
        return response()->json([
            'user' => $user,
            'token' => $token
        ], 201);
    }

    // User login method
    public function login(Request $request)
    {
        // Validate login credentials
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        // Attempt to authenticate the user
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        // Retrieve authenticated user
        $user = Auth::user();

        // Generate a personal access token for the authenticated user
        $token = $user->createToken('api_token')->plainTextToken;

        // Return user info and token
        return response()->json([
            'user' => $user,
            'token' => $token
        ]);
    }

    // User logout method
    public function logout(Request $request)
    {
        // Delete the current access token to log the user out
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logged out successfully'
        ]);
    }
}
