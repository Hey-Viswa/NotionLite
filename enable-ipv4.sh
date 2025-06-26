#!/bin/bash

# Instructions for enabling IPv4 add-on for Supabase
# 1. Get your access token from https://supabase.com/dashboard/account/tokens
# 2. Replace "your-access-token" with your actual token
# 3. Run this script

# Set your variables
export SUPABASE_ACCESS_TOKEN="your-access-token"  # Replace with your actual token
export PROJECT_REF="csnnwcmrajmsbyuisanf"

echo "🔍 Checking current IPv4 add-on status..."
curl -X GET "https://api.supabase.com/v1/projects/$PROJECT_REF/billing/addons" \
  -H "Authorization: Bearer $SUPABASE_ACCESS_TOKEN"

echo -e "\n\n🚀 Enabling IPv4 add-on..."
curl -X POST "https://api.supabase.com/v1/projects/$PROJECT_REF/addons" \
  -H "Authorization: Bearer $SUPABASE_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "addon_type": "ipv4"
  }'

echo -e "\n\n✅ IPv4 add-on enable request sent!"
echo "Note: It may take a few minutes for the changes to take effect."
echo "After enabling, you can use the direct connection string:"
echo "postgresql://postgres:biswagtr091.@db.csnnwcmrajmsbyuisanf.supabase.co:5432/postgres"
