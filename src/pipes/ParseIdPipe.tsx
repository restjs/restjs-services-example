export default class ParseIdPipe {
    use(req){
        /// If route params have a field with 'id' key, this pipe will transform it from string to an integer.
        if(req.params.id){
            req.params.id = parseInt(req.params.id);
        }
    }
}
