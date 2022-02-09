all: deploy compile clean

compile:
	@cd ./go/ && make all
	@echo "---Go compiled succesfully---"

deploy: compile
	@cd ./pulumi && pulumi up

clean:
	@rm -r ./go/tmp/*
