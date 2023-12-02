```bash
# restart vm
az vm restart -g MyResourceGroup -n MyVm

az find blob
az find "az create vm"

# Create a resource group
az group create --name MyResourceGroup --location eastus
az group list
az group list --output table
az group list --query "[?name == '$RESOURCE_GROUP']"

# Create a managed disk in resource group
az disk create --resource-group MyResourceGroup --name MyDisk --size-gb 10

# Update disk size to 64
az disk update --resource-group MyResourceGroup --name MyDisk --size-gb 64

# Install
brew update
brew install azure-cli

# Create app service plan
az appservice plan create --name $AZURE_APP_PLAN --resource-group $RESOURCE_GROUP --location $AZURE_REGION --sku FREE
az appservice plan list --output table

# Create web app
az webapp create --name $AZURE_WEB_APP --resource-group $RESOURCE_GROUP --plan $AZURE_APP_PLAN
az webapp list --output table

# Deploy hello world from Github
az webapp deployment source config --name $AZURE_WEB_APP --resource-group $RESOURCE_GROUP --repo-url "https://github.com/Azure-Samples/php-docs-hello-world" --branch master --manual-integration

# List all subscriptions
az account list --output table

# Delete subscription
az account delete --subscription $SUBSCRIPTION_ID


```
