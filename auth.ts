import Resend from 'next-auth/providers/resend'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { prisma } from '@/lib/prisma'
import NextAuth from 'next-auth'

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),

  providers: [
    // Resend({
    //   apiKey: process.env.AUTH_RESEND_KEY,
    //   from: process.env.AUTH_EMAIL_FROM,
    // }),
  ],
})
