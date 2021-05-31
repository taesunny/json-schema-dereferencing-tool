## json-schema-dereferencing-tool (on developing state)

- It's dereferencing tool json-schema file(.json format) having $ref references.
- It's been tested using Node v14.16.0.
- It's a cli tool.

### How to use

- step0: download this project

- step1: create 'data' directory on the same directory with index.js

    - Example:
    ```
    mkdir data
    ```

- step2: copy your target json files having $ref references and all referenced files into the './data/' directory.

- step3: add file lists to dereference into target-files.txt

    > target-files.txt must use `LF end of line`!!!

    - target-files.txt file Example:
    ```
    daemonset.json
    pod.json
    deployment.json
    ```

- step4: run index.js using node

    - Command Example:
    ```shell
    node index.js
    ```

- Result: The result files will be created on './output/' directory.

## Sources

- It uses [json-schema-ref-parser](https://github.com/APIDevTools/json-schema-ref-parser) library.
