class ApiResponse {
    constructor(success, message, data = "Success") {
        this.statusCode = statusCode;
        this.success = statusCode < 400;   
        this.message = message;
        this.data = data;
    }
}