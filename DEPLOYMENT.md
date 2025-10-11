# Deployment Guide: GitHub Actions + Firebase Hosting

This guide will help you set up automated deployment of your Astro blog to Firebase Hosting using GitHub Actions.

## Prerequisites

- A GitHub repository for your project
- A Firebase account
- Node.js installed locally (for initial setup)

## Setup Steps

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter project name: `dancummingsdev` (or your preferred name)
4. Follow the setup wizard
5. Enable Google Analytics if desired
6. Click "Create project"

### 2. Enable Firebase Hosting

1. In your Firebase project console, click "Hosting" in the left sidebar
2. Click "Get started"
3. Follow the setup instructions (you can skip the CLI setup for now)

### 3. Configure Firebase Project ID

Update the project ID in the following files if you chose a different name than `dancummingsdev`:

- `.firebaserc` - Update the project ID in the `projects.default` field
- `.github/workflows/deploy.yml` - Update the `projectId` in the workflow

### 4. Create Service Account

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your Firebase project
3. Navigate to "IAM & Admin" > "Service Accounts"
4. Click "Create Service Account"
5. Enter name: `github-actions-deploy`
6. Add description: `Service account for GitHub Actions deployment`
7. Click "Create and Continue"
8. Add role: `Firebase Hosting Admin`
9. Click "Continue" and then "Done"
10. Click on the created service account
11. Go to "Keys" tab
12. Click "Add Key" > "Create new key"
13. Choose "JSON" format
14. Download the JSON file (keep it secure!)

### 5. Configure GitHub Secrets

1. Go to your GitHub repository
2. Click "Settings" tab
3. Click "Secrets and variables" > "Actions"
4. Click "New repository secret"
5. Add the following secret:
   - **Name**: `FIREBASE_SERVICE_ACCOUNT_DANCUMMINGSDEV`
   - **Value**: Copy the entire contents of the downloaded JSON file

### 6. Test the Deployment

1. Push your changes to the `main` or `master` branch
2. Go to your repository's "Actions" tab
3. You should see the "Build and Deploy to Firebase" workflow running
4. Once completed, your site will be available at `https://dancummingsdev.web.app`

## Workflow Details

The GitHub Actions workflow (`.github/workflows/deploy.yml`) does the following:

1. **Triggers**: Runs on pushes to `main`/`master` branches and pull requests
2. **Build Process**:
   - Checks out the repository
   - Sets up Node.js 18 with npm caching
   - Installs dependencies with `npm ci`
   - Builds the Astro application with `npm run build`
3. **Deployment**: 
   - Only deploys on pushes to main/master (not on PRs)
   - Uses Firebase hosting deploy action
   - Deploys to the live channel

## Firebase Configuration

### `firebase.json`
- **Public directory**: `dist` (Astro's build output)
- **Rewrites**: SPA-style routing for Astro
- **Headers**: Optimized caching for static assets
- **Ignore**: Excludes unnecessary files from deployment

### `.firebaserc`
- **Project mapping**: Links to your Firebase project ID

## Custom Domain (Optional)

To use a custom domain:

1. In Firebase Console, go to Hosting
2. Click "Add custom domain"
3. Follow the domain verification process
4. Update your DNS records as instructed

## Troubleshooting

### Common Issues

1. **Build fails**: Check the Actions tab for error logs
2. **Deployment fails**: Verify the service account has proper permissions
3. **Site not updating**: Check if the workflow is running and completing successfully

### Manual Deployment

If you need to deploy manually:

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize (if not already done)
firebase init hosting

# Build and deploy
npm run build
firebase deploy
```

## Security Notes

- Never commit the service account JSON file to your repository
- Keep your Firebase service account keys secure
- Regularly rotate service account keys for security
- Use environment-specific secrets for different deployment environments

## Support

- [Firebase Hosting Documentation](https://firebase.google.com/docs/hosting)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Astro Deployment Guide](https://docs.astro.build/en/guides/deploy/)
