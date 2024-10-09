Kubernetes Command Cheat Sheet:
* alias
        * Set up an alias for kubectl

* kubetl get pods 
        * Retrieves information about the specified pod
    * -o=json
        * Output formatted to JSON
    * -o=yaml
        * Output formatted to YAML
    * -o=wide
        * Output formatted to plain text with additional information

* kubectl create -f
        * Creates a new resource
    * ./<file_name>
        * Creates resource from named file
    * <configuration_file>
        * Creates an object
    * <configuration_file_directory>
        * Creates objects in all manifest files within a directory
    * <URL>
        * Creates an object from the named URL

* kubectl delete -f <configuration_file>
        * Deletes specified object

* kubectl -h
        * A help command for users

* kubectl apply -f <configuration_file>
        * Create and update objects as needed
