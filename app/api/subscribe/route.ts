import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  
  try {
    const { email } = await request.json();
    console.log('Otrzymany email:', email);

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Nieprawidłowy adres email' },
        { status: 400 }
      );
    }

    const url = 'https://connect.mailerlite.com/api/subscribers';
    console.log('Wysyłam do:', url);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MAILERLITE_API_KEY}`,
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        groups: [process.env.MAILERLITE_GROUP_ID], // Dodane przypisanie do grupy
      }),
    });

    console.log('MailerLite response status:', response.status);
    
    const data = await response.json();
    console.log('MailerLite response data:', data);

    if (response.ok) {
      console.log('✓ Sukces!');
      return NextResponse.json({ 
        success: true, 
        message: 'Dziękujemy za zapisanie się!' 
      });
    } else if (response.status === 422) {
      console.log('Email już istnieje lub błąd walidacji');
      return NextResponse.json(
        { error: 'Ten email jest już zapisany lub jest nieprawidłowy' },
        { status: 400 }
      );
    } else if (response.status === 401) {
      console.log('Błąd autoryzacji - sprawdź API key');
      return NextResponse.json(
        { error: 'Błąd autoryzacji API' },
        { status: 500 }
      );
    } else {
      console.error('MailerLite error:', data);
      return NextResponse.json(
        { error: 'Wystąpił błąd podczas zapisu' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('✗ API error:', error);
    return NextResponse.json(
      { error: 'Wystąpił błąd serwera' },
      { status: 500 }
    );
  }
}