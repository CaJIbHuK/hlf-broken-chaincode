# hlf-broken-chaincode
Example of a chaincode that breaks hlf network.


Invocation:
```
CORE_PEER_TLS_ROOTCERT_FILE=<peer tls ca> \
CORE_PEER_MSPCONFIGPATH=<peer admin identity> \
CORE_PEER_LOCALMSPID=<peer org MSP> \
CORE_PEER_ADDRESS=<peer endpoint> \
CORE_PEER_TLS_ENABLED=true  \
FABRIC_CFG_PATH=<path to fabric config files> \
peer chaincode invoke \
-C <channel name> \
-n brokencontract \
--peerAddresses <peer endpoint> \
--tlsRootCertFiles <peer tls ca> \
--tls \
-o <orderer ednpoint> \
--cafile <orderer tls ca file> \
-c "{\"Args\": [\"break\"]}"
```
