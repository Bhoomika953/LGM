function ac()
{
    document.getElementById("result").value="";
}
function show(input)
{
    document.getElementById("result").value+=input;
}
function answer()
{
    var out=eval(document.getElementById("result").value);
    document.getElementById("result").value=out;
