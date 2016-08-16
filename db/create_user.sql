select *
from users
--$1 because it'll be the 1st param
where id = $1;
