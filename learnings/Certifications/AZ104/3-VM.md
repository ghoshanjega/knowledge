https://learn.microsoft.com/en-us/azure/virtual-machines/

Create VM with root certificate
Once Cloud-init.txt has been created, you can deploy the VM with az vm create cmdlet, using the --custom-data parameter to provide the full path to the cloud- init.txt file.
az vm create

If the VM you wish to resize is part of an availability set, then you must stop all VMs in the availability set before changing the size of any VM in the availability set.
The reason all VMs in the availability set must be stopped before performing the resize operation to a size that requires different hardware is that all running VMs in the availability set must be using the same physical hardware cluster. Therefore, if a change of physical hardware cluster is required to change the VM size then all VMs must be first stopped and then restarted one-by-one to a different physical hardware clusters.

platformUpdateDomainCount
