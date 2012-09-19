.PHONY: server tudoo

build:
	cp src/index.html tudoo/
	mkdir tudoo/assets
	cp src/js/libs/* tudoo/assets/
	cp src/js/*.js tudoo/assets/
	cp src/js/Collections/* tudoo/assets/
	cp src/js/Models/* tudoo/assets/
	cp src/js/Views/* tudoo/assets/
	cp src/css/* tudoo/assets/

server:
	cd tudoo; tsapp serve & echo $$! > .pid
	sleep 2

server-kill:
	kill `cat tudoo/.pid` || true
	rm tudoo/.pid

tudoo: build server

clean: server-kill
	rm tudoo/index.html
	rm tudoo/assets/*
