export interface HomeResponseType {
  researches: ResearchesType;
  audience: AudienceType;
  credits: CreditsType;
  id: string;
  createAt: string;
}

export interface ResearchesType {
  running: string;
  scripting: number;
  myresearches: MyresearchType[];
}

export interface MyResearchType {
  name: string;
  id: number;
  status: string;
}

export interface AudienceType {
  balance: number;
  sended: number;
  contacts: number;
}

export interface CreditsType {
  running: number;
  reserved: number;
  available: number;
}

export interface NotificationType {
  comments: number;
  read: boolean;
  mensage: string;
  id: string;
  createAt: string;
}
