@component('mail::message')
# Your Password Changed

Hi {{ $user->fullname }}!

Recently you changed the password, please use the new password to login.

Thanks,<br>
Andalan Mama
@endcomponent
