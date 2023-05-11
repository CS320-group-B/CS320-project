build:
	@echo JWT_SECRET = "TEST" > server/.env
	@echo DATABASE_URL = "mongodb+srv://user:123@cluster0.7sb85e6.mongodb.net/?retryWrites=true&w=majority" >> server/.env
	@echo PORT = 5000 >> server/.env
	@echo SALT_ROUNDS = 12 >> server/.env
	
	npm start
