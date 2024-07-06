import Member from "../models/member.model.js";

export const getMembers = async (req, res) => {
  const members = await Member.find();
  res.json(members);
};

export const createMember = async (req, res) => {
  const {
    documentId,
    firstName,
    lastName,
    age,
    email,
    phone,
    birthDate,
    gender,
    address,
    maritalStatus,
    startYearChurch,
    isBaptized,
    baptismDate,
    isServer,
    ministry,
    serviceArea,
  } = req.body;

  const newMember = new Member({
    documentId,
    firstName,
    lastName,
    age,
    email,
    phone,
    birthDate,
    gender,
    address,
    maritalStatus,
    startYearChurch,
    isBaptized,
    baptismDate,
    isServer,
    ministry,
    serviceArea,
  })
  const savedMember = await newMember.save();
  res.json(savedMember);
};

export const getMember = async (req, res) => {
  const member = await Member.findById(req.params.id);
  if (!member) return res.status(404).json({ message: "Member not found" });
  res.json(member);
};

export const updateMember = async (req, res) => {
  const member = await Member.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  if (!member) return res.status(404).json({ message: "Member not found" });
  res.json(member);
};

export const deleteMember = async (req, res) => {
  const member = await Member.findByIdAndDelete(req.params.id);
  if (!member) return res.status(404).json({ message: "Member not found" });
  res.status(204);
};
