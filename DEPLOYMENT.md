# Deployment Guide for Email Modifier App

This guide covers deploying your Email Modifier app to Vercel.

## Prerequisites

- A [Vercel account](https://vercel.com/signup)
- Your Google Gemini API key (from [Google AI Studio](https://makersuite.google.com/))
- Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Steps

### 1. Connect your repository to Vercel

1. Log in to your Vercel account
2. Click "Add New" > "Project"
3. Import your Git repository
4. Select the "Email Modifier" repository

### 2. Configure your project

1. Leave the default settings as they are:

   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: .next

2. **Important:** Add your environment variable:

   - Click "Environment Variables"
   - Add a variable with:
     - Name: `GEMINI_API_KEY`
     - Value: Your Gemini API key (paste the actual API key value here)
   - Make sure it's added to Production, Preview, and Development environments
   - Note: Do NOT prefix the value with '@' or reference a secret - just enter the actual API key value

3. Click "Deploy"

### 3. Verify your deployment

1. Wait for the build to complete
2. Vercel will provide a deployment URL (e.g., `email-modifier-123xyz.vercel.app`)
3. Visit the URL to confirm your app is working properly

## Troubleshooting

If you encounter issues with your deployment:

1. **Environment Variable Error**

   - If you see an error like "Environment Variable references Secret, which does not exist" - make sure you're entering the actual API key as the value, not a reference to a secret
   - You can update environment variables after deployment in Project Settings > Environment Variables

2. **Deployment Fails**

   - Check Vercel build logs for specific errors
   - Ensure all dependencies are properly installed
   - Verify your Next.js configuration is correct

3. **API Not Working**

   - Confirm your `GEMINI_API_KEY` is correctly set in Vercel environment variables
   - Check browser console for any API-related errors
   - Verify the API route is correctly implemented

4. **Other Issues**
   - Check that you're using the correct versions of packages
   - Ensure your code doesn't have any TypeScript errors

## Updating Your Deployment

To update your application after making changes:

1. Push your changes to your Git repository
2. Vercel will automatically trigger a new deployment
3. Monitor the build progress in your Vercel dashboard

## Custom Domain (Optional)

To add a custom domain to your project:

1. In your Vercel project dashboard, go to "Settings" > "Domains"
2. Add your domain and follow the verification steps provided

For more detailed information, refer to [Vercel's documentation](https://vercel.com/docs).
