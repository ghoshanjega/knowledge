```ps

<!-- Create new VM -->
New-AzVm `
    -ResourceGroupName "CrmTestingResourceGroup" `
    -Name "CrmUnitTests" `
    -Image "UbuntuLTS"
New-AzVm `
    -ResourceGroupName "learn-181c29ef-b026-485e-a055-bfe576f74d14" `
    -Name "testvm-eus-01" `
    -Image "Canonical:0001-com-ubuntu-server-focal:20_04-lts:latest"
Get-Credential
New-AzVm -ResourceGroupName learn-181c29ef-b026-485e-a055-bfe576f74d14 -Name "testvm-eus-01" -Credential (Get-Credential) -Location "eastus" -Image Canonical:0001-com-ubuntu-server-focal:20_04-lts:latest -OpenPorts 22 -PublicIpAddressName "testvm-01"
$vm = (Get-AzVM -Name "testvm-eus-01" -ResourceGroupName learn-181c29ef-b026-485e-a055-bfe576f74d14)
<!-- Get public IP -->
Get-AzPublicIpAddress -ResourceGroupName learn-181c29ef-b026-485e-a055-bfe576f74d14 -Name "testvm-01"

Stop-AzVM -Name $vm.Name -ResourceGroupName $vm.ResourceGroupName
Remove-AzVM -Name $vm.Name -ResourceGroupName $vm.ResourceGroupName
<!-- Get resources related -->
Get-AzResource -ResourceGroupName $vm.ResourceGroupName | Format-Table
<!-- Clean up resources related -->
$vm | Remove-AzNetworkInterface –Force
Get-AzDisk -ResourceGroupName $vm.ResourceGroupName -DiskName $vm.StorageProfile.OSDisk.Name | Remove-AzDisk -Force
Get-AzVirtualNetwork -ResourceGroupName $vm.ResourceGroupName | Remove-AzVirtualNetwork -Force
Get-AzNetworkSecurityGroup -ResourceGroupName $vm.ResourceGroupName | Remove-AzNetworkSecurityGroup -Force
Get-AzPublicIpAddress -ResourceGroupName $vm.ResourceGroupName | Remove-AzPublicIpAddress -Force

<!-- Create new resource group -->
New-AzResourceGroup -Name '104' -Location 'westeurope'

<!-- # Create a disk configuration object -->
$diskConfig = New-AzDiskConfig `
  -Location westEurope `
  -CreateOption Empty `
  -DiskSizeGB 32 `
  -SkuName "Standard_LRS"

<!-- # Create the managed disk -->
New-AzDisk `
  -ResourceGroupName 104 `
  -DiskName myDisk `
  -Disk $diskConfig

Get-AzDisk -ResourceGroupName 104 -Name myDisk

New-AzDiskUpdateConfig -DiskSizeGB 64 | Update-AzDisk -ResourceGroupName 104 -DiskName myDisk

<!-- Get help for a cmdlet -->
Get-Help -Name Get-ChildItem -Detailed
Get-Help -Name New-AzVm -Detailed

<!-- Get all pwsh module -->
Get-Module -ListAvailable

<!-- List installed pwsh modules -->
Get-Module

<!-- Install azure module -->
Install-Module -Name Az -Scope CurrentUser -Repository PSGallery -Force

<!-- Update a module -->
Update-Module -Name Az

<!-- Connect to AZ -->
Connect-AzAccount
Set-AzContext -Subscription '6c1d4152-39d0-44ca-88d9-b8d6ddca0708'

<!-- Get resource group -->
Get-AzResourceGroup
Get-AzResourceGroup | Format-Table

<!-- New resource group -->
New-AzResourceGroup -Name Farm -Location westeurope

<!-- Delete Resource group -->
Remove-AzResourceGroup -Name Farm

<!-- Get all resources -->
Get-AzResource
Get-AzResource | Format-Table
Get-AzResource -ResourceGroupName 104

<!-- Saving objects as powershell objects -->
$ResourceGroupName = "ExerciseResources"
$vm = Get-AzVM  -Name MyVM -ResourceGroupName $ResourceGroupName
$vm.HardwareProfile.vmSize = "Standard_DS3_v2"

Update-AzVM -ResourceGroupName $ResourceGroupName  -VM $vm

<!-- loops in pwsh -->
For ($i = 1; $i -lt 3; $i++)
{
    $i
}

<!-- passing parameters to powershell script -->
param([string]$location, [int]$size)
.\setupEnvironment.ps1 -size 5 -location "East US"
.\setupEnvironment.ps1 "East US" 5

```
