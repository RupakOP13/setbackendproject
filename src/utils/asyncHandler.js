const asyncHandler = (fn) => {   //async error handling middleware
    return (req, res, next) => {  //return a new function that wraps the original function
    Promise.resolve(fn(req, res, next)).  //resolve the promise returned by the original function
    catch((error) => next(error));   //if there's an error, pass it to the next middleware
}
}


    export {asyncHandler};




    // const asyncHandler = (fn) =>async(req, res, next) => {
    //     try {
    //         await fn(req, res, next);
    //     }   catch (error) {      
    //         res.status(error.code || 500).json({
    //             success: false,
    //             message: error.message
    //         });
    //     }
    // }