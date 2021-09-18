/*for(var a=1; a<4; a++)
{
    if(a==2){break}
    for(var b=1; b<4; b++)
{
    if(b==2){break}

            console.log(a)
}

}
for(var a=1; a<4; a++)
{
    if(a==2){break}
    for(var b=1; b<4; b++)
    {
        if(b==2)
        {continue}

            console.log(b)
            }
            console.log(a)
}*/

for(var a=1; a<4; a++)
{
    if(a==2){continue}
    for(var b=1; b<4; b++)
    {
        if(b==2)
        {break}

            console.log(b)
            }
            console.log(a)
}