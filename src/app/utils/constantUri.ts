const baseUrl= 'https://api.themoviedb.org/3';
export class ConstantUri {
    public static readonly apiKey= '408a3e2abc267349948313ee9c3591b3';
    public static readonly validateWithLogin = baseUrl + '/authentication/token/validate_with_login'; 
    public static readonly tokenNew = baseUrl + '/authentication/token/new';
    public static readonly popularMovies = baseUrl + '/movie/popular';
    public static readonly movieDetail = baseUrl + '/movie';
    public static readonly pathImg = 'https://tmdb.org/t/p/original';
}