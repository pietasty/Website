//https://stackoverflow.com/a/4149393
export function niceName(string: string): string {
    return string
        // insert a space before all caps
        .replace(/([A-Z])/g, ' $1')
        // uppercase the first character
        .replace(/^./, function(str){ return str.toUpperCase(); })
}

export function getUrlHostName(string: string):string {
    var url: URL;
    try{
        url = new URL(string)
    } catch (e){
        return null;
    }

    return url.hostname
}