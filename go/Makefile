all: compile zip

clean:
	rm -f /tmp/main.zip main

compile:
	GOOS=linux GOARCH=amd64 go build -o ./tmp/main
	

zip:
	zip -j ./tmp/main.zip ./tmp/main
