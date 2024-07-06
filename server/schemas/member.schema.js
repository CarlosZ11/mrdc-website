import {z} from 'zod'

export const createMemberSchema = z.object({
  documentId: z.string({
    required_error: "Document ID is required",
  })
    .min(6, {
      message: "Document must be at least 6 characters",
    }),
  firstName: z.string({
    required_error: "First name is required",
  }),
  lastName: z.string({
    required_error: "Last name is required",
  }),
  email: z.string({
    required_error: "Email is required",
  })
    .email({
      message: "Email is not valid",
    }),
  phone: z.string({
    required_error: "Phone number is required",
  }),
  birthDate: z.string({
    required_error: "Birth date is required",
  }).datetime().optional(),
  gender: z.string({
    required_error: "Gender is required",
  }),
  address: z.string({
    required_error: "Address is required",
  }),
  maritalStatus: z.string({
    required_error: "Marital status is required",
  }),
  startYearChurch: z.string({
    required_error: "Start year in church is required",
  }).datetime().optional(),
  isBaptized: z.string({
    required_error: "Baptism status is required",
  }),
  baptismDate: z.string().datetime().optional(),
  isServer: z.string({
    required_error: "Server status is required",
  }),
  ministry: z.string({
    required_error: "Ministry is required",
  }),
  serviceArea: z.array(z.string()).optional(),
});