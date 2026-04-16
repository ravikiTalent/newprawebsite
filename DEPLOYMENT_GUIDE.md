# Hostinger VPS Deployment Guide - Legallens India

## Prerequisites
- Node.js 18+ installed on VPS
- Nginx installed and running
- Git installed on VPS
- SSH access to your VPS

## Step 1: Connect to VPS

```bash
ssh user@your_vps_ip
```

## Step 2: Create Application Directory

```bash
mkdir -p /home/legallens
cd /home/legallens
```

## Step 3: Clone Repository

```bash
git clone https://github.com/yourusername/legallens-app.git
cd legallens-app
```

## Step 4: Install Dependencies

```bash
npm install
npm install -g pm2
```

## Step 5: Create Environment File

```bash
nano .env.production
```

Add the following and update with your values:
```
KINDE_CLIENT_ID=your_client_id
KINDE_CLIENT_SECRET=your_client_secret
KINDE_ISSUER_URL=https://legallensindia.kinde.com
KINDE_SITE_URL=https://yourdomain.com
KINDE_POST_LOGIN_REDIRECT_URL=https://yourdomain.com/dashboard
KINDE_POST_LOGOUT_REDIRECT_URL=https://yourdomain.com
NODE_ENV=production
```

## Step 6: Build Application

```bash
npm run build
```

## Step 7: Set Up PM2 (Process Manager)

```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

## Step 8: Configure Nginx

```bash
sudo cp nginx.conf.example /etc/nginx/sites-available/legallens
sudo nano /etc/nginx/sites-available/legallens
```

Replace:
- `yourdomain.com` with your actual domain
- `/home/legallens` with your app directory

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/legallens /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## Step 9: Set Up SSL Certificate (Let's Encrypt)

```bash
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx
sudo certbot certonly --nginx -d yourdomain.com -d www.yourdomain.com
```

## Step 10: Set Up Auto-Deployment (Optional)

Create a webhook in your Git repository to trigger deploy.sh automatically on push.

## Useful Commands

```bash
# View logs
pm2 logs legallens-app

# Restart app
pm2 restart legallens-app

# Update and deploy
cd /home/legallens/legallens-app
./deploy.sh

# Check Nginx status
sudo systemctl status nginx

# Renew SSL certificate
sudo certbot renew --dry-run
```

## Troubleshooting

### App won't start
```bash
pm2 logs legallens-app
```

### Nginx 502 Bad Gateway
- Check if PM2 app is running: `pm2 status`
- Check if port 3000 is listening: `netstat -tlnp | grep 3000`

### SSL Certificate issues
```bash
sudo certbot renew
sudo systemctl restart nginx
```

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| KINDE_CLIENT_ID | Kinde OAuth client ID | From Kinde dashboard |
| KINDE_CLIENT_SECRET | Kinde OAuth secret | From Kinde dashboard |
| KINDE_ISSUER_URL | Kinde issuer URL | https://legallensindia.kinde.com |
| KINDE_SITE_URL | Your production URL | https://yourdomain.com |
| KINDE_POST_LOGIN_REDIRECT_URL | Redirect after login | https://yourdomain.com/dashboard |
| KINDE_POST_LOGOUT_REDIRECT_URL | Redirect after logout | https://yourdomain.com |
| NODE_ENV | Environment | production |
