.PHONY: server tudoo require setup

build: move-assets require

move-assets:
	cp src/*.html tudoo/
	cp src/js/libs/* tudoo/assets/
	cp src/css/* tudoo/assets/
	cp src/img/* tudoo/assets/

update: require
	cp src/*.html tudoo/
	cp src/css/* tudoo/assets/

require:
	cd src/js && r.js -o name=script.js out=../../tudoo/assets/tudoo.js baseUrl=. optimize=none

server:
	cd tudoo; tsapp serve & echo $$! > .pid
	sleep 2

server-kill:
	kill `cat tudoo/.pid` || true
	rm tudoo/.pid

tudoo: build server

clean: server-kill
	rm tudoo/*.html
	rm -r tudoo/assets/*
