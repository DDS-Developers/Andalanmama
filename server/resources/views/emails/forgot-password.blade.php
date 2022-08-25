@component('mail::message')
# Reset Password

Hi {{ $user->fullname }}! We got a request to change the password for the account with the username {{ $user->email }}.
Here is the security code to change your current password :

<div style="text-align: center; padding: 10px; border: 1px solid; margin: 20px 0; font-weight: bold;">
    {{ $user->reset_code }}
</div>

Psst ... the reset code only valid before **{{ $user->reset_code_valid_at }}**

If you don't want to reset your password, you can ignore this email.

Thanks,<br>
Andalan Mama
@endcomponent
