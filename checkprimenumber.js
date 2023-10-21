function check_prime(number)
{
  if(number == 1)
  {
    return false;
  }
  else if(number !== 2)
  {
    return true;
  }
  else
  {
    for(let i = 2; i< number; i++)
      {
        if(number % i == 0)
        {
          return false;
        }
        else
        {
          return true;
        }
      }
  }
  
}

console.log(check_prime(1));
console.log(check_prime(5));