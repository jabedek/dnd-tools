import { Request, Response } from "express";
import { getNamesJSON, saveNamesJSON } from "../utils/names.utils";

const loadNames = async (req: Request, res: Response) => {
  const [data, err] = await getNamesJSON();

  if (data) {
    res.status(200).json(data);
  }

  if (err) {
    res.status(500).json(err);
  }

  return;
};

const saveNames = async (req: Request, res: Response) => {
  const [data, err] = await saveNamesJSON(req.body.data);

  if (data) {
    res.status(200).json(data);
  }

  if (err) {
    res.status(500).json(err);
  }
  return;
};

export const namesController = {
  loadNames,
  saveNames,
};
