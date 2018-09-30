function testGit(count, access)
{
    while (access = true){
        count++;
        if (count > 99) break;
    }
    console.log(count);
}
testGit(10,true)