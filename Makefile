.PHONY: server tudoo

build:
	cp src/index.html tudoo/
	mkdir tudoo/assets
	cp src/js/libs/* tudoo/assets/
	cd src/js && r.js -o name=script.js out=../../tudoo/assets/tudoo.js baseUrl=. optimize=none
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
	rm -r tudoo/assets
