#Lanzar Servicio

export GOPATH=/usr/local/lib/go
export GOROOT=/root/go
export DB_USER='postgres'
export DB_PWD='way2CryptopasswordWebW1553t'
export HOST_URI='http://localhost'
export HOST_PORT=':8081'
export WALLET_URI='http://localhost:8082'

PATH=$PATH:$GOROOT/bin:$GOPATH/bin

cd Zent-0.2.2/build/src
 
./Zent-service --daemon-address seedpro1.zent.cash --daemon-port 21698 --bind-port 8070 -w WebWalletContainer -p ThisIsMyWishContainer --rpc-password 9ju08mS09e2RPCCorrect233a87fhrbsAoie &

sleep 10

cd /root/shellnet-webwallet-go/services/main/
sh run.sh &

sleep 5

cd /root/shellnet-webwallet-go/services/user/
sh run.sh &

sleep 5

cd /root/shellnet-webwallet-go/services/wallet/
sh run.sh &
