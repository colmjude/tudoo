.PHONY: server tudoo

build:
	cp src/js/libs/* tudoo/assets/
	cp src/css/* tudoo/assets/

server:
	cd tudoo; tsapp serve & echo $$! > .pid
	sleep 2

server-kill:
	kill `cat tudoo/.pid` || true
	rm tudoo/.pid

tudoo: build server

clean: server-kill
	rm tudoo/assets/backbone*
	rm tudoo/assets/jquery*
	rm tudoo/assets/underscore*
	rm tudoo/assets/*.css
