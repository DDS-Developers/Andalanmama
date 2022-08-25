@component('mail::message')
# Email Registration

Hi {{ $user->fullname }},

Thank you for your registration.
Your username is {{ $user->email }}

You can edit your account information at any point in the future by visiting your profile.

Thanks,<br>
Andalan Mama
@endcomponent
