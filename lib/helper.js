slugify = function(text, size) {
  if(text){
    text = text.replace(/[^-_a-zA-Z0-9,&\s]+/ig, '');
    text = text.replace(/\s/gi, "_");
    text = text.toLowerCase();
  }
  if(size && text.length > size)
    return text.substring(0,size);
  else
    return text;
};
