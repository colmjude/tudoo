.PHONY: server

server:
	cd tudoo; tsapp serve & echo $$! > .pid
	sleep 2

server-kill:
	kill `cat tudoo/.pid` || true
	rm tudoo/.pid
