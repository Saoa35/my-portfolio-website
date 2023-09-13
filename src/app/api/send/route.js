// import type { NextApiRequest, NextApiResponse } from "next";
// import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// export default async (req: NextApiRequest, res: NextApiResponse) => {
export default async () => {
  try {
    const data = await resend.emails.send({
      from: "Oleksandr <saoamah@gmail.com>",
      to: ["saoamah@gmail.com"],
      subject: "Hello world",
      react: (
        <>
          <p>Email Person</p>
        </>
      ),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};
