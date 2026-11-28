import type { Locale } from '@/lib/i18n/routing';
import type { ToolContent } from './tools/types';

// The short explainer under the home page generator. Links are internal paths.
export const HOME_CONTENT: Record<Locale, ToolContent> = {
  tr: {
    sections: [
      {
        title: 'Güçlü şifre nasıl oluşturulur?',
        blocks: [{ steps: [
          'Parola türünü seçin. Bir hesap için rastgele parola, elle yazmanız gereken durumlarda parola ifadesi kullanabilirsiniz.',
          'Hesabın kabul ettiği uzunluğu ve karakterleri ayarlayın. Uzun, rastgele ve başka hesaplarda kullanılmayan bir şifre seçin.',
          'Yeni parola oluşturun ve kopyalayın. Çıktıyı bir parola yöneticisinde saklayın; burada gösterilen örnekleri hesap şifresi olarak kullanmayın.',
          'Her hesapta farklı parola kullanın. Hizmet destekliyorsa çok faktörlü doğrulamayı da açın.',
        ] }],
      },

      {
        title: 'Nasıl çalışır?',
        blocks: [
          'Parolalar tarayıcınızdaki Web Crypto rastgele sayı üreticisiyle (CSPRNG) oluşturulur ve sunucuya gönderilmez. Karakter seçiminde modulo sapması olmaması için reddetme örneklemesi kullanılır; seçtiğiniz kurallar (ör. her türden en az bir karakter) karşılanamıyorsa sessizce gevşetilmez, hata gösterilir.',
        ],
      },
      {
        title: 'Entropi değeri ne anlatır?',
        blocks: [
          'Gösterilen bit değeri, seçili ayarlarla üretilebilecek tüm çıktıların sayısının log₂ değeridir. Rastgele üretilmiş bir parolanın tahmin edilme güçlüğünü bu değer belirler. Kendi seçtiğiniz bir parolanın gücünü ölçmek için [parola gücü analizi](/araclar/strength-checker) aracını kullanın.',
        ],
      },
      {
        title: 'Hangi türü seçmeli?',
        blocks: [
          {
            list: [
              '**Rastgele parola:** parola yöneticisinde saklanacak hesaplar ve uygulama gizli anahtarları için.',
              '**Parola ifadesi:** ezberlenmesi veya elle yazılması gereken ana parolalar için. 5–6 kelime önerilir.',
              '**PIN:** yalnız rakam kabul eden ve deneme sayısını sınırlayan sistemler için.',
            ],
          },
        ],
      },
    ],
    faq: [
      { q: 'Şifre oluşturucu ücretsiz mi?', a: 'Evet. Rastgele parola, parola ifadesi ve PIN oluşturmak için hesap açmanız gerekmez.' },
      { q: 'Oluşturduğum şifre kaydediliyor mu?', a: 'Parola üretimi tarayıcınızda yapılır; oluşturulan parola sunucuya gönderilmez. Kopyaladığınız parola cihazınızın panosuna gider; ortak cihazlarda panoyu ve ekranı korumayı unutmayın.' },
      { q: 'Şifre ile parola arasında fark var mı?', a: 'Hesaba giriş için kullanılan gizli metin günlük dilde hem şifre hem parola olarak adlandırılır. Parola ifadesi ise rastgele seçilen birkaç kelimeden oluşur.' },
      { q: 'Birden fazla şifreyi nasıl oluşturabilirim?', a: '[Toplu parola oluşturucu](/toplu-parola) ile birden fazla çıktı hazırlayabilirsiniz. Her hesabın parolasını ayrı tutun.' },
      { q: 'Parolamın gücünü nasıl kontrol ederim?', a: '[Parola gücü ölçer](/araclar/strength-checker) yaygın örüntüleri değerlendirir. Sonuç bir tahmindir; hesabın ele geçirilemeyeceğini veya kesin kırılma süresini garanti etmez.' },
    ],
    sources: [{ label: 'NIST SP 800-63B-4 · Parola ve kimlik doğrulama rehberi', url: 'https://pages.nist.gov/800-63-4/sp800-63b.html' }],
  },
  en: {
    sections: [
      {
        title: 'How to generate a strong password',
        blocks: [{ steps: [
          'Choose random password for an account, or a passphrase when you need to type it by hand.',
          'Set the length and characters your account accepts. Choose a long, random password that you do not use anywhere else.',
          'Generate and copy the result, then store it in a password manager. Do not use published examples as real passwords.',
          'Use a different password for every account and enable multi-factor authentication when available.',
        ] }],
      },

      {
        title: 'How does it work?',
        blocks: [
          'Passwords are created with your browser’s Web Crypto random number generator (CSPRNG) and are never sent to a server. Characters are picked with rejection sampling so there is no modulo bias, and if the rules you choose (such as at least one character of each type) cannot be met, you get an error instead of quietly relaxed rules.',
        ],
      },
      {
        title: 'What does the entropy figure mean?',
        blocks: [
          'The number of bits shown is log₂ of how many different outputs the selected settings can produce. For a randomly generated password, that number is what determines how hard it is to guess. To rate a password you chose yourself, use the [password strength checker](/araclar/strength-checker).',
        ],
      },
      {
        title: 'Which type should I choose?',
        blocks: [
          {
            list: [
              '**Random password:** for accounts stored in a password manager and for application secrets.',
              '**Passphrase:** for master passwords you need to remember or type by hand. Five to six words are recommended.',
              '**PIN:** for systems that accept only digits and limit the number of attempts.',
            ],
          },
        ],
      },
    ],
    faq: [
      { q: 'Is this password generator free?', a: 'Yes. You can generate passwords, passphrases and PINs without an account.' },
      { q: 'Are generated passwords saved on a server?', a: 'Generation runs in your browser and the generated password is not sent to a server. Copying puts the result on your device clipboard; protect your screen and clipboard on shared devices.' },
      { q: 'Can I generate several passwords at once?', a: 'Use the [bulk password generator](/toplu-parola) for multiple outputs. Keep a unique password for each account.' },
      { q: 'How do I check password strength?', a: 'The [password strength checker](/araclar/strength-checker) estimates common patterns. It does not guarantee account safety or an exact cracking time.' },
    ],
    sources: [{ label: 'NIST SP 800-63B-4 · Authentication and password guidance', url: 'https://pages.nist.gov/800-63-4/sp800-63b.html' }],
  },
};
