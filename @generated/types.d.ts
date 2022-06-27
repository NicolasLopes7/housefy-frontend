import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateTransaction = {
  __typename?: 'AggregateTransaction';
  _avg?: Maybe<TransactionAvgAggregate>;
  _count?: Maybe<TransactionCountAggregate>;
  _max?: Maybe<TransactionMaxAggregate>;
  _min?: Maybe<TransactionMinAggregate>;
  _sum?: Maybe<TransactionSumAggregate>;
};

export type AggregateTransactionAssignee = {
  __typename?: 'AggregateTransactionAssignee';
  _avg?: Maybe<TransactionAssigneeAvgAggregate>;
  _count?: Maybe<TransactionAssigneeCountAggregate>;
  _max?: Maybe<TransactionAssigneeMaxAggregate>;
  _min?: Maybe<TransactionAssigneeMinAggregate>;
  _sum?: Maybe<TransactionAssigneeSumAggregate>;
};

export type AggregateTransactionMetadata = {
  __typename?: 'AggregateTransactionMetadata';
  _avg?: Maybe<TransactionMetadataAvgAggregate>;
  _count?: Maybe<TransactionMetadataCountAggregate>;
  _max?: Maybe<TransactionMetadataMaxAggregate>;
  _min?: Maybe<TransactionMetadataMinAggregate>;
  _sum?: Maybe<TransactionMetadataSumAggregate>;
};

export type AggregateTransactionOperation = {
  __typename?: 'AggregateTransactionOperation';
  _avg?: Maybe<TransactionOperationAvgAggregate>;
  _count?: Maybe<TransactionOperationCountAggregate>;
  _max?: Maybe<TransactionOperationMaxAggregate>;
  _min?: Maybe<TransactionOperationMinAggregate>;
  _sum?: Maybe<TransactionOperationSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumTransactionMetadataTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<TransactionMetadataType>;
};

export type EnumTransactionMetadataTypeFilter = {
  equals?: InputMaybe<TransactionMetadataType>;
  in?: InputMaybe<Array<TransactionMetadataType>>;
  not?: InputMaybe<NestedEnumTransactionMetadataTypeFilter>;
  notIn?: InputMaybe<Array<TransactionMetadataType>>;
};

export type EnumTransactionMetadataTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumTransactionMetadataTypeFilter>;
  _min?: InputMaybe<NestedEnumTransactionMetadataTypeFilter>;
  equals?: InputMaybe<TransactionMetadataType>;
  in?: InputMaybe<Array<TransactionMetadataType>>;
  not?: InputMaybe<NestedEnumTransactionMetadataTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<TransactionMetadataType>>;
};

export type EnumTransactionStatusFieldUpdateOperationsInput = {
  set?: InputMaybe<TransactionStatus>;
};

export type EnumTransactionStatusFilter = {
  equals?: InputMaybe<TransactionStatus>;
  in?: InputMaybe<Array<TransactionStatus>>;
  not?: InputMaybe<NestedEnumTransactionStatusFilter>;
  notIn?: InputMaybe<Array<TransactionStatus>>;
};

export type EnumTransactionStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumTransactionStatusFilter>;
  _min?: InputMaybe<NestedEnumTransactionStatusFilter>;
  equals?: InputMaybe<TransactionStatus>;
  in?: InputMaybe<Array<TransactionStatus>>;
  not?: InputMaybe<NestedEnumTransactionStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<TransactionStatus>>;
};

export type EnumTransactionTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<TransactionType>;
};

export type EnumTransactionTypeFilter = {
  equals?: InputMaybe<TransactionType>;
  in?: InputMaybe<Array<TransactionType>>;
  not?: InputMaybe<NestedEnumTransactionTypeFilter>;
  notIn?: InputMaybe<Array<TransactionType>>;
};

export type EnumTransactionTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumTransactionTypeFilter>;
  _min?: InputMaybe<NestedEnumTransactionTypeFilter>;
  equals?: InputMaybe<TransactionType>;
  in?: InputMaybe<Array<TransactionType>>;
  not?: InputMaybe<NestedEnumTransactionTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<TransactionType>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyTransaction: AffectedRowsOutput;
  createManyTransactionAssignee: AffectedRowsOutput;
  createManyTransactionMetadata: AffectedRowsOutput;
  createManyTransactionOperation: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createTransaction: Transaction;
  createTransactionAssignee: TransactionAssignee;
  createTransactionMetadata: TransactionMetadata;
  createTransactionOperation: TransactionOperation;
  createUser: User;
  deleteManyTransaction: AffectedRowsOutput;
  deleteManyTransactionAssignee: AffectedRowsOutput;
  deleteManyTransactionMetadata: AffectedRowsOutput;
  deleteManyTransactionOperation: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteTransaction?: Maybe<Transaction>;
  deleteTransactionAssignee?: Maybe<TransactionAssignee>;
  deleteTransactionMetadata?: Maybe<TransactionMetadata>;
  deleteTransactionOperation?: Maybe<TransactionOperation>;
  deleteUser?: Maybe<User>;
  updateManyTransaction: AffectedRowsOutput;
  updateManyTransactionAssignee: AffectedRowsOutput;
  updateManyTransactionMetadata: AffectedRowsOutput;
  updateManyTransactionOperation: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateTransaction?: Maybe<Transaction>;
  updateTransactionAssignee?: Maybe<TransactionAssignee>;
  updateTransactionMetadata?: Maybe<TransactionMetadata>;
  updateTransactionOperation?: Maybe<TransactionOperation>;
  updateUser?: Maybe<User>;
  upsertTransaction: Transaction;
  upsertTransactionAssignee: TransactionAssignee;
  upsertTransactionMetadata: TransactionMetadata;
  upsertTransactionOperation: TransactionOperation;
  upsertUser: User;
};


export type MutationCreateManyTransactionArgs = {
  data: Array<TransactionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyTransactionAssigneeArgs = {
  data: Array<TransactionAssigneeCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyTransactionMetadataArgs = {
  data: Array<TransactionMetadataCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyTransactionOperationArgs = {
  data: Array<TransactionOperationCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateTransactionArgs = {
  data: TransactionCreateInput;
};


export type MutationCreateTransactionAssigneeArgs = {
  data: TransactionAssigneeCreateInput;
};


export type MutationCreateTransactionMetadataArgs = {
  data: TransactionMetadataCreateInput;
};


export type MutationCreateTransactionOperationArgs = {
  data: TransactionOperationCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyTransactionArgs = {
  where?: InputMaybe<TransactionWhereInput>;
};


export type MutationDeleteManyTransactionAssigneeArgs = {
  where?: InputMaybe<TransactionAssigneeWhereInput>;
};


export type MutationDeleteManyTransactionMetadataArgs = {
  where?: InputMaybe<TransactionMetadataWhereInput>;
};


export type MutationDeleteManyTransactionOperationArgs = {
  where?: InputMaybe<TransactionOperationWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteTransactionArgs = {
  where: TransactionWhereUniqueInput;
};


export type MutationDeleteTransactionAssigneeArgs = {
  where: TransactionAssigneeWhereUniqueInput;
};


export type MutationDeleteTransactionMetadataArgs = {
  where: TransactionMetadataWhereUniqueInput;
};


export type MutationDeleteTransactionOperationArgs = {
  where: TransactionOperationWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationUpdateManyTransactionArgs = {
  data: TransactionUpdateManyMutationInput;
  where?: InputMaybe<TransactionWhereInput>;
};


export type MutationUpdateManyTransactionAssigneeArgs = {
  data: TransactionAssigneeUpdateManyMutationInput;
  where?: InputMaybe<TransactionAssigneeWhereInput>;
};


export type MutationUpdateManyTransactionMetadataArgs = {
  data: TransactionMetadataUpdateManyMutationInput;
  where?: InputMaybe<TransactionMetadataWhereInput>;
};


export type MutationUpdateManyTransactionOperationArgs = {
  data: TransactionOperationUpdateManyMutationInput;
  where?: InputMaybe<TransactionOperationWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateTransactionArgs = {
  data: TransactionUpdateInput;
  where: TransactionWhereUniqueInput;
};


export type MutationUpdateTransactionAssigneeArgs = {
  data: TransactionAssigneeUpdateInput;
  where: TransactionAssigneeWhereUniqueInput;
};


export type MutationUpdateTransactionMetadataArgs = {
  data: TransactionMetadataUpdateInput;
  where: TransactionMetadataWhereUniqueInput;
};


export type MutationUpdateTransactionOperationArgs = {
  data: TransactionOperationUpdateInput;
  where: TransactionOperationWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertTransactionArgs = {
  create: TransactionCreateInput;
  update: TransactionUpdateInput;
  where: TransactionWhereUniqueInput;
};


export type MutationUpsertTransactionAssigneeArgs = {
  create: TransactionAssigneeCreateInput;
  update: TransactionAssigneeUpdateInput;
  where: TransactionAssigneeWhereUniqueInput;
};


export type MutationUpsertTransactionMetadataArgs = {
  create: TransactionMetadataCreateInput;
  update: TransactionMetadataUpdateInput;
  where: TransactionMetadataWhereUniqueInput;
};


export type MutationUpsertTransactionOperationArgs = {
  create: TransactionOperationCreateInput;
  update: TransactionOperationUpdateInput;
  where: TransactionOperationWhereUniqueInput;
};


export type MutationUpsertUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumTransactionMetadataTypeFilter = {
  equals?: InputMaybe<TransactionMetadataType>;
  in?: InputMaybe<Array<TransactionMetadataType>>;
  not?: InputMaybe<NestedEnumTransactionMetadataTypeFilter>;
  notIn?: InputMaybe<Array<TransactionMetadataType>>;
};

export type NestedEnumTransactionMetadataTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumTransactionMetadataTypeFilter>;
  _min?: InputMaybe<NestedEnumTransactionMetadataTypeFilter>;
  equals?: InputMaybe<TransactionMetadataType>;
  in?: InputMaybe<Array<TransactionMetadataType>>;
  not?: InputMaybe<NestedEnumTransactionMetadataTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<TransactionMetadataType>>;
};

export type NestedEnumTransactionStatusFilter = {
  equals?: InputMaybe<TransactionStatus>;
  in?: InputMaybe<Array<TransactionStatus>>;
  not?: InputMaybe<NestedEnumTransactionStatusFilter>;
  notIn?: InputMaybe<Array<TransactionStatus>>;
};

export type NestedEnumTransactionStatusWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumTransactionStatusFilter>;
  _min?: InputMaybe<NestedEnumTransactionStatusFilter>;
  equals?: InputMaybe<TransactionStatus>;
  in?: InputMaybe<Array<TransactionStatus>>;
  not?: InputMaybe<NestedEnumTransactionStatusWithAggregatesFilter>;
  notIn?: InputMaybe<Array<TransactionStatus>>;
};

export type NestedEnumTransactionTypeFilter = {
  equals?: InputMaybe<TransactionType>;
  in?: InputMaybe<Array<TransactionType>>;
  not?: InputMaybe<NestedEnumTransactionTypeFilter>;
  notIn?: InputMaybe<Array<TransactionType>>;
};

export type NestedEnumTransactionTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumTransactionTypeFilter>;
  _min?: InputMaybe<NestedEnumTransactionTypeFilter>;
  equals?: InputMaybe<TransactionType>;
  in?: InputMaybe<Array<TransactionType>>;
  not?: InputMaybe<NestedEnumTransactionTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<TransactionType>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateTransaction: AggregateTransaction;
  aggregateTransactionAssignee: AggregateTransactionAssignee;
  aggregateTransactionMetadata: AggregateTransactionMetadata;
  aggregateTransactionOperation: AggregateTransactionOperation;
  aggregateUser: AggregateUser;
  findFirstTransaction?: Maybe<Transaction>;
  findFirstTransactionAssignee?: Maybe<TransactionAssignee>;
  findFirstTransactionMetadata?: Maybe<TransactionMetadata>;
  findFirstTransactionOperation?: Maybe<TransactionOperation>;
  findFirstUser?: Maybe<User>;
  findManyTransactionMetadata: Array<TransactionMetadata>;
  findUniqueTransactionMetadata?: Maybe<TransactionMetadata>;
  groupByTransaction: Array<TransactionGroupBy>;
  groupByTransactionAssignee: Array<TransactionAssigneeGroupBy>;
  groupByTransactionMetadata: Array<TransactionMetadataGroupBy>;
  groupByTransactionOperation: Array<TransactionOperationGroupBy>;
  groupByUser: Array<UserGroupBy>;
  transaction?: Maybe<Transaction>;
  transactionAssignee?: Maybe<TransactionAssignee>;
  transactionAssignees: Array<TransactionAssignee>;
  transactionOperation?: Maybe<TransactionOperation>;
  transactionOperations: Array<TransactionOperation>;
  transactions: Array<Transaction>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregateTransactionArgs = {
  cursor?: InputMaybe<TransactionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TransactionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionWhereInput>;
};


export type QueryAggregateTransactionAssigneeArgs = {
  cursor?: InputMaybe<TransactionAssigneeWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TransactionAssigneeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionAssigneeWhereInput>;
};


export type QueryAggregateTransactionMetadataArgs = {
  cursor?: InputMaybe<TransactionMetadataWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TransactionMetadataOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionMetadataWhereInput>;
};


export type QueryAggregateTransactionOperationArgs = {
  cursor?: InputMaybe<TransactionOperationWhereUniqueInput>;
  orderBy?: InputMaybe<Array<TransactionOperationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionOperationWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstTransactionArgs = {
  cursor?: InputMaybe<TransactionWhereUniqueInput>;
  distinct?: InputMaybe<Array<TransactionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TransactionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionWhereInput>;
};


export type QueryFindFirstTransactionAssigneeArgs = {
  cursor?: InputMaybe<TransactionAssigneeWhereUniqueInput>;
  distinct?: InputMaybe<Array<TransactionAssigneeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TransactionAssigneeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionAssigneeWhereInput>;
};


export type QueryFindFirstTransactionMetadataArgs = {
  cursor?: InputMaybe<TransactionMetadataWhereUniqueInput>;
  distinct?: InputMaybe<Array<TransactionMetadataScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TransactionMetadataOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionMetadataWhereInput>;
};


export type QueryFindFirstTransactionOperationArgs = {
  cursor?: InputMaybe<TransactionOperationWhereUniqueInput>;
  distinct?: InputMaybe<Array<TransactionOperationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TransactionOperationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionOperationWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindManyTransactionMetadataArgs = {
  cursor?: InputMaybe<TransactionMetadataWhereUniqueInput>;
  distinct?: InputMaybe<Array<TransactionMetadataScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TransactionMetadataOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionMetadataWhereInput>;
};


export type QueryFindUniqueTransactionMetadataArgs = {
  where: TransactionMetadataWhereUniqueInput;
};


export type QueryGroupByTransactionArgs = {
  by: Array<TransactionScalarFieldEnum>;
  having?: InputMaybe<TransactionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TransactionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionWhereInput>;
};


export type QueryGroupByTransactionAssigneeArgs = {
  by: Array<TransactionAssigneeScalarFieldEnum>;
  having?: InputMaybe<TransactionAssigneeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TransactionAssigneeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionAssigneeWhereInput>;
};


export type QueryGroupByTransactionMetadataArgs = {
  by: Array<TransactionMetadataScalarFieldEnum>;
  having?: InputMaybe<TransactionMetadataScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TransactionMetadataOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionMetadataWhereInput>;
};


export type QueryGroupByTransactionOperationArgs = {
  by: Array<TransactionOperationScalarFieldEnum>;
  having?: InputMaybe<TransactionOperationScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<TransactionOperationOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionOperationWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryTransactionArgs = {
  where: TransactionWhereUniqueInput;
};


export type QueryTransactionAssigneeArgs = {
  where: TransactionAssigneeWhereUniqueInput;
};


export type QueryTransactionAssigneesArgs = {
  cursor?: InputMaybe<TransactionAssigneeWhereUniqueInput>;
  distinct?: InputMaybe<Array<TransactionAssigneeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TransactionAssigneeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionAssigneeWhereInput>;
};


export type QueryTransactionOperationArgs = {
  where: TransactionOperationWhereUniqueInput;
};


export type QueryTransactionOperationsArgs = {
  cursor?: InputMaybe<TransactionOperationWhereUniqueInput>;
  distinct?: InputMaybe<Array<TransactionOperationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TransactionOperationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionOperationWhereInput>;
};


export type QueryTransactionsArgs = {
  cursor?: InputMaybe<TransactionWhereUniqueInput>;
  distinct?: InputMaybe<Array<TransactionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TransactionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Transaction = {
  __typename?: 'Transaction';
  _count?: Maybe<TransactionCount>;
  amount: Scalars['Int'];
  assignees: Array<TransactionAssignee>;
  description: Scalars['String'];
  dueDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  isRecurrent: Scalars['Boolean'];
  metadata: Array<TransactionMetadata>;
  name: Scalars['String'];
  operations: Array<TransactionOperation>;
  recurrencyPeriod?: Maybe<Scalars['Int']>;
  status: TransactionStatus;
  type: TransactionType;
};


export type TransactionAssigneesArgs = {
  cursor?: InputMaybe<TransactionAssigneeWhereUniqueInput>;
  distinct?: InputMaybe<Array<TransactionAssigneeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TransactionAssigneeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionAssigneeWhereInput>;
};


export type TransactionMetadataArgs = {
  cursor?: InputMaybe<TransactionMetadataWhereUniqueInput>;
  distinct?: InputMaybe<Array<TransactionMetadataScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TransactionMetadataOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionMetadataWhereInput>;
};


export type TransactionOperationsArgs = {
  cursor?: InputMaybe<TransactionOperationWhereUniqueInput>;
  distinct?: InputMaybe<Array<TransactionOperationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TransactionOperationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionOperationWhereInput>;
};

export type TransactionAssignee = {
  __typename?: 'TransactionAssignee';
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  transaction: Transaction;
  transactionId: Scalars['Int'];
  user: User;
  userId: Scalars['Int'];
};

export type TransactionAssigneeAvgAggregate = {
  __typename?: 'TransactionAssigneeAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  transactionId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type TransactionAssigneeAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  transactionId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TransactionAssigneeCountAggregate = {
  __typename?: 'TransactionAssigneeCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  transactionId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type TransactionAssigneeCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  transactionId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TransactionAssigneeCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  transaction: TransactionCreateNestedOneWithoutAssigneesInput;
  user: UserCreateNestedOneWithoutAssigneesInput;
};

export type TransactionAssigneeCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  transactionId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type TransactionAssigneeCreateManyTransactionInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  userId: Scalars['Int'];
};

export type TransactionAssigneeCreateManyTransactionInputEnvelope = {
  data: Array<TransactionAssigneeCreateManyTransactionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TransactionAssigneeCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  transactionId: Scalars['Int'];
};

export type TransactionAssigneeCreateManyUserInputEnvelope = {
  data: Array<TransactionAssigneeCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TransactionAssigneeCreateNestedManyWithoutTransactionInput = {
  connect?: InputMaybe<Array<TransactionAssigneeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionAssigneeCreateOrConnectWithoutTransactionInput>>;
  create?: InputMaybe<Array<TransactionAssigneeCreateWithoutTransactionInput>>;
  createMany?: InputMaybe<TransactionAssigneeCreateManyTransactionInputEnvelope>;
};

export type TransactionAssigneeCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<TransactionAssigneeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionAssigneeCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TransactionAssigneeCreateWithoutUserInput>>;
  createMany?: InputMaybe<TransactionAssigneeCreateManyUserInputEnvelope>;
};

export type TransactionAssigneeCreateOrConnectWithoutTransactionInput = {
  create: TransactionAssigneeCreateWithoutTransactionInput;
  where: TransactionAssigneeWhereUniqueInput;
};

export type TransactionAssigneeCreateOrConnectWithoutUserInput = {
  create: TransactionAssigneeCreateWithoutUserInput;
  where: TransactionAssigneeWhereUniqueInput;
};

export type TransactionAssigneeCreateWithoutTransactionInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutAssigneesInput;
};

export type TransactionAssigneeCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  transaction: TransactionCreateNestedOneWithoutAssigneesInput;
};

export type TransactionAssigneeGroupBy = {
  __typename?: 'TransactionAssigneeGroupBy';
  _avg?: Maybe<TransactionAssigneeAvgAggregate>;
  _count?: Maybe<TransactionAssigneeCountAggregate>;
  _max?: Maybe<TransactionAssigneeMaxAggregate>;
  _min?: Maybe<TransactionAssigneeMinAggregate>;
  _sum?: Maybe<TransactionAssigneeSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  transactionId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type TransactionAssigneeListRelationFilter = {
  every?: InputMaybe<TransactionAssigneeWhereInput>;
  none?: InputMaybe<TransactionAssigneeWhereInput>;
  some?: InputMaybe<TransactionAssigneeWhereInput>;
};

export type TransactionAssigneeMaxAggregate = {
  __typename?: 'TransactionAssigneeMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  transactionId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type TransactionAssigneeMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  transactionId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TransactionAssigneeMinAggregate = {
  __typename?: 'TransactionAssigneeMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  transactionId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type TransactionAssigneeMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  transactionId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TransactionAssigneeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TransactionAssigneeOrderByWithAggregationInput = {
  _avg?: InputMaybe<TransactionAssigneeAvgOrderByAggregateInput>;
  _count?: InputMaybe<TransactionAssigneeCountOrderByAggregateInput>;
  _max?: InputMaybe<TransactionAssigneeMaxOrderByAggregateInput>;
  _min?: InputMaybe<TransactionAssigneeMinOrderByAggregateInput>;
  _sum?: InputMaybe<TransactionAssigneeSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  transactionId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TransactionAssigneeOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  transaction?: InputMaybe<TransactionOrderByWithRelationInput>;
  transactionId?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum TransactionAssigneeScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  TransactionId = 'transactionId',
  UserId = 'userId'
}

export type TransactionAssigneeScalarWhereInput = {
  AND?: InputMaybe<Array<TransactionAssigneeScalarWhereInput>>;
  NOT?: InputMaybe<Array<TransactionAssigneeScalarWhereInput>>;
  OR?: InputMaybe<Array<TransactionAssigneeScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  transactionId?: InputMaybe<IntFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type TransactionAssigneeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TransactionAssigneeScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TransactionAssigneeScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TransactionAssigneeScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  transactionId?: InputMaybe<IntWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type TransactionAssigneeSumAggregate = {
  __typename?: 'TransactionAssigneeSumAggregate';
  id?: Maybe<Scalars['Int']>;
  transactionId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type TransactionAssigneeSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  transactionId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TransactionAssigneeUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  transaction?: InputMaybe<TransactionUpdateOneRequiredWithoutAssigneesInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAssigneesInput>;
};

export type TransactionAssigneeUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TransactionAssigneeUpdateManyWithWhereWithoutTransactionInput = {
  data: TransactionAssigneeUpdateManyMutationInput;
  where: TransactionAssigneeScalarWhereInput;
};

export type TransactionAssigneeUpdateManyWithWhereWithoutUserInput = {
  data: TransactionAssigneeUpdateManyMutationInput;
  where: TransactionAssigneeScalarWhereInput;
};

export type TransactionAssigneeUpdateManyWithoutTransactionInput = {
  connect?: InputMaybe<Array<TransactionAssigneeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionAssigneeCreateOrConnectWithoutTransactionInput>>;
  create?: InputMaybe<Array<TransactionAssigneeCreateWithoutTransactionInput>>;
  createMany?: InputMaybe<TransactionAssigneeCreateManyTransactionInputEnvelope>;
  delete?: InputMaybe<Array<TransactionAssigneeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TransactionAssigneeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TransactionAssigneeWhereUniqueInput>>;
  set?: InputMaybe<Array<TransactionAssigneeWhereUniqueInput>>;
  update?: InputMaybe<Array<TransactionAssigneeUpdateWithWhereUniqueWithoutTransactionInput>>;
  updateMany?: InputMaybe<Array<TransactionAssigneeUpdateManyWithWhereWithoutTransactionInput>>;
  upsert?: InputMaybe<Array<TransactionAssigneeUpsertWithWhereUniqueWithoutTransactionInput>>;
};

export type TransactionAssigneeUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<TransactionAssigneeWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionAssigneeCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TransactionAssigneeCreateWithoutUserInput>>;
  createMany?: InputMaybe<TransactionAssigneeCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<TransactionAssigneeWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TransactionAssigneeScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TransactionAssigneeWhereUniqueInput>>;
  set?: InputMaybe<Array<TransactionAssigneeWhereUniqueInput>>;
  update?: InputMaybe<Array<TransactionAssigneeUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<TransactionAssigneeUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<TransactionAssigneeUpsertWithWhereUniqueWithoutUserInput>>;
};

export type TransactionAssigneeUpdateWithWhereUniqueWithoutTransactionInput = {
  data: TransactionAssigneeUpdateWithoutTransactionInput;
  where: TransactionAssigneeWhereUniqueInput;
};

export type TransactionAssigneeUpdateWithWhereUniqueWithoutUserInput = {
  data: TransactionAssigneeUpdateWithoutUserInput;
  where: TransactionAssigneeWhereUniqueInput;
};

export type TransactionAssigneeUpdateWithoutTransactionInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAssigneesInput>;
};

export type TransactionAssigneeUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  transaction?: InputMaybe<TransactionUpdateOneRequiredWithoutAssigneesInput>;
};

export type TransactionAssigneeUpsertWithWhereUniqueWithoutTransactionInput = {
  create: TransactionAssigneeCreateWithoutTransactionInput;
  update: TransactionAssigneeUpdateWithoutTransactionInput;
  where: TransactionAssigneeWhereUniqueInput;
};

export type TransactionAssigneeUpsertWithWhereUniqueWithoutUserInput = {
  create: TransactionAssigneeCreateWithoutUserInput;
  update: TransactionAssigneeUpdateWithoutUserInput;
  where: TransactionAssigneeWhereUniqueInput;
};

export type TransactionAssigneeWhereInput = {
  AND?: InputMaybe<Array<TransactionAssigneeWhereInput>>;
  NOT?: InputMaybe<Array<TransactionAssigneeWhereInput>>;
  OR?: InputMaybe<Array<TransactionAssigneeWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  transaction?: InputMaybe<TransactionRelationFilter>;
  transactionId?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type TransactionAssigneeWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type TransactionAvgAggregate = {
  __typename?: 'TransactionAvgAggregate';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  recurrencyPeriod?: Maybe<Scalars['Float']>;
};

export type TransactionAvgOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  recurrencyPeriod?: InputMaybe<SortOrder>;
};

export type TransactionCount = {
  __typename?: 'TransactionCount';
  assignees: Scalars['Int'];
  metadata: Scalars['Int'];
  operations: Scalars['Int'];
};

export type TransactionCountAggregate = {
  __typename?: 'TransactionCountAggregate';
  _all: Scalars['Int'];
  amount: Scalars['Int'];
  description: Scalars['Int'];
  dueDate: Scalars['Int'];
  id: Scalars['Int'];
  isRecurrent: Scalars['Int'];
  name: Scalars['Int'];
  recurrencyPeriod: Scalars['Int'];
  status: Scalars['Int'];
  type: Scalars['Int'];
};

export type TransactionCountOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  dueDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isRecurrent?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  recurrencyPeriod?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type TransactionCreateInput = {
  amount: Scalars['Int'];
  assignees?: InputMaybe<TransactionAssigneeCreateNestedManyWithoutTransactionInput>;
  description: Scalars['String'];
  dueDate?: InputMaybe<Scalars['DateTime']>;
  isRecurrent?: InputMaybe<Scalars['Boolean']>;
  metadata?: InputMaybe<TransactionMetadataCreateNestedManyWithoutTransactionInput>;
  name: Scalars['String'];
  operations?: InputMaybe<TransactionOperationCreateNestedManyWithoutTransactionInput>;
  recurrencyPeriod?: InputMaybe<Scalars['Int']>;
  status: TransactionStatus;
  type: TransactionType;
};

export type TransactionCreateManyInput = {
  amount: Scalars['Int'];
  description: Scalars['String'];
  dueDate?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  isRecurrent?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  recurrencyPeriod?: InputMaybe<Scalars['Int']>;
  status: TransactionStatus;
  type: TransactionType;
};

export type TransactionCreateNestedOneWithoutAssigneesInput = {
  connect?: InputMaybe<TransactionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TransactionCreateOrConnectWithoutAssigneesInput>;
  create?: InputMaybe<TransactionCreateWithoutAssigneesInput>;
};

export type TransactionCreateNestedOneWithoutMetadataInput = {
  connect?: InputMaybe<TransactionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TransactionCreateOrConnectWithoutMetadataInput>;
  create?: InputMaybe<TransactionCreateWithoutMetadataInput>;
};

export type TransactionCreateNestedOneWithoutOperationsInput = {
  connect?: InputMaybe<TransactionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TransactionCreateOrConnectWithoutOperationsInput>;
  create?: InputMaybe<TransactionCreateWithoutOperationsInput>;
};

export type TransactionCreateOrConnectWithoutAssigneesInput = {
  create: TransactionCreateWithoutAssigneesInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionCreateOrConnectWithoutMetadataInput = {
  create: TransactionCreateWithoutMetadataInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionCreateOrConnectWithoutOperationsInput = {
  create: TransactionCreateWithoutOperationsInput;
  where: TransactionWhereUniqueInput;
};

export type TransactionCreateWithoutAssigneesInput = {
  amount: Scalars['Int'];
  description: Scalars['String'];
  dueDate?: InputMaybe<Scalars['DateTime']>;
  isRecurrent?: InputMaybe<Scalars['Boolean']>;
  metadata?: InputMaybe<TransactionMetadataCreateNestedManyWithoutTransactionInput>;
  name: Scalars['String'];
  operations?: InputMaybe<TransactionOperationCreateNestedManyWithoutTransactionInput>;
  recurrencyPeriod?: InputMaybe<Scalars['Int']>;
  status: TransactionStatus;
  type: TransactionType;
};

export type TransactionCreateWithoutMetadataInput = {
  amount: Scalars['Int'];
  assignees?: InputMaybe<TransactionAssigneeCreateNestedManyWithoutTransactionInput>;
  description: Scalars['String'];
  dueDate?: InputMaybe<Scalars['DateTime']>;
  isRecurrent?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  operations?: InputMaybe<TransactionOperationCreateNestedManyWithoutTransactionInput>;
  recurrencyPeriod?: InputMaybe<Scalars['Int']>;
  status: TransactionStatus;
  type: TransactionType;
};

export type TransactionCreateWithoutOperationsInput = {
  amount: Scalars['Int'];
  assignees?: InputMaybe<TransactionAssigneeCreateNestedManyWithoutTransactionInput>;
  description: Scalars['String'];
  dueDate?: InputMaybe<Scalars['DateTime']>;
  isRecurrent?: InputMaybe<Scalars['Boolean']>;
  metadata?: InputMaybe<TransactionMetadataCreateNestedManyWithoutTransactionInput>;
  name: Scalars['String'];
  recurrencyPeriod?: InputMaybe<Scalars['Int']>;
  status: TransactionStatus;
  type: TransactionType;
};

export type TransactionGroupBy = {
  __typename?: 'TransactionGroupBy';
  _avg?: Maybe<TransactionAvgAggregate>;
  _count?: Maybe<TransactionCountAggregate>;
  _max?: Maybe<TransactionMaxAggregate>;
  _min?: Maybe<TransactionMinAggregate>;
  _sum?: Maybe<TransactionSumAggregate>;
  amount: Scalars['Int'];
  description: Scalars['String'];
  dueDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  isRecurrent: Scalars['Boolean'];
  name: Scalars['String'];
  recurrencyPeriod?: Maybe<Scalars['Int']>;
  status: TransactionStatus;
  type: TransactionType;
};

export type TransactionMaxAggregate = {
  __typename?: 'TransactionMaxAggregate';
  amount?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  isRecurrent?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  recurrencyPeriod?: Maybe<Scalars['Int']>;
  status?: Maybe<TransactionStatus>;
  type?: Maybe<TransactionType>;
};

export type TransactionMaxOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  dueDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isRecurrent?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  recurrencyPeriod?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type TransactionMetadata = {
  __typename?: 'TransactionMetadata';
  Transaction: Transaction;
  id: Scalars['Int'];
  key: Scalars['String'];
  transactionId: Scalars['Int'];
  type: TransactionMetadataType;
  value: Scalars['String'];
};

export type TransactionMetadataAvgAggregate = {
  __typename?: 'TransactionMetadataAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  transactionId?: Maybe<Scalars['Float']>;
};

export type TransactionMetadataAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  transactionId?: InputMaybe<SortOrder>;
};

export type TransactionMetadataCountAggregate = {
  __typename?: 'TransactionMetadataCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  key: Scalars['Int'];
  transactionId: Scalars['Int'];
  type: Scalars['Int'];
  value: Scalars['Int'];
};

export type TransactionMetadataCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  transactionId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type TransactionMetadataCreateInput = {
  Transaction: TransactionCreateNestedOneWithoutMetadataInput;
  key: Scalars['String'];
  type: TransactionMetadataType;
  value: Scalars['String'];
};

export type TransactionMetadataCreateManyInput = {
  id?: InputMaybe<Scalars['Int']>;
  key: Scalars['String'];
  transactionId: Scalars['Int'];
  type: TransactionMetadataType;
  value: Scalars['String'];
};

export type TransactionMetadataCreateManyTransactionInput = {
  id?: InputMaybe<Scalars['Int']>;
  key: Scalars['String'];
  type: TransactionMetadataType;
  value: Scalars['String'];
};

export type TransactionMetadataCreateManyTransactionInputEnvelope = {
  data: Array<TransactionMetadataCreateManyTransactionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TransactionMetadataCreateNestedManyWithoutTransactionInput = {
  connect?: InputMaybe<Array<TransactionMetadataWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionMetadataCreateOrConnectWithoutTransactionInput>>;
  create?: InputMaybe<Array<TransactionMetadataCreateWithoutTransactionInput>>;
  createMany?: InputMaybe<TransactionMetadataCreateManyTransactionInputEnvelope>;
};

export type TransactionMetadataCreateOrConnectWithoutTransactionInput = {
  create: TransactionMetadataCreateWithoutTransactionInput;
  where: TransactionMetadataWhereUniqueInput;
};

export type TransactionMetadataCreateWithoutTransactionInput = {
  key: Scalars['String'];
  type: TransactionMetadataType;
  value: Scalars['String'];
};

export type TransactionMetadataGroupBy = {
  __typename?: 'TransactionMetadataGroupBy';
  _avg?: Maybe<TransactionMetadataAvgAggregate>;
  _count?: Maybe<TransactionMetadataCountAggregate>;
  _max?: Maybe<TransactionMetadataMaxAggregate>;
  _min?: Maybe<TransactionMetadataMinAggregate>;
  _sum?: Maybe<TransactionMetadataSumAggregate>;
  id: Scalars['Int'];
  key: Scalars['String'];
  transactionId: Scalars['Int'];
  type: TransactionMetadataType;
  value: Scalars['String'];
};

export type TransactionMetadataListRelationFilter = {
  every?: InputMaybe<TransactionMetadataWhereInput>;
  none?: InputMaybe<TransactionMetadataWhereInput>;
  some?: InputMaybe<TransactionMetadataWhereInput>;
};

export type TransactionMetadataMaxAggregate = {
  __typename?: 'TransactionMetadataMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['Int']>;
  type?: Maybe<TransactionMetadataType>;
  value?: Maybe<Scalars['String']>;
};

export type TransactionMetadataMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  transactionId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type TransactionMetadataMinAggregate = {
  __typename?: 'TransactionMetadataMinAggregate';
  id?: Maybe<Scalars['Int']>;
  key?: Maybe<Scalars['String']>;
  transactionId?: Maybe<Scalars['Int']>;
  type?: Maybe<TransactionMetadataType>;
  value?: Maybe<Scalars['String']>;
};

export type TransactionMetadataMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  transactionId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type TransactionMetadataOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TransactionMetadataOrderByWithAggregationInput = {
  _avg?: InputMaybe<TransactionMetadataAvgOrderByAggregateInput>;
  _count?: InputMaybe<TransactionMetadataCountOrderByAggregateInput>;
  _max?: InputMaybe<TransactionMetadataMaxOrderByAggregateInput>;
  _min?: InputMaybe<TransactionMetadataMinOrderByAggregateInput>;
  _sum?: InputMaybe<TransactionMetadataSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  transactionId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type TransactionMetadataOrderByWithRelationInput = {
  Transaction?: InputMaybe<TransactionOrderByWithRelationInput>;
  id?: InputMaybe<SortOrder>;
  key?: InputMaybe<SortOrder>;
  transactionId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export enum TransactionMetadataScalarFieldEnum {
  Id = 'id',
  Key = 'key',
  TransactionId = 'transactionId',
  Type = 'type',
  Value = 'value'
}

export type TransactionMetadataScalarWhereInput = {
  AND?: InputMaybe<Array<TransactionMetadataScalarWhereInput>>;
  NOT?: InputMaybe<Array<TransactionMetadataScalarWhereInput>>;
  OR?: InputMaybe<Array<TransactionMetadataScalarWhereInput>>;
  id?: InputMaybe<IntFilter>;
  key?: InputMaybe<StringFilter>;
  transactionId?: InputMaybe<IntFilter>;
  type?: InputMaybe<EnumTransactionMetadataTypeFilter>;
  value?: InputMaybe<StringFilter>;
};

export type TransactionMetadataScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TransactionMetadataScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TransactionMetadataScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TransactionMetadataScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  key?: InputMaybe<StringWithAggregatesFilter>;
  transactionId?: InputMaybe<IntWithAggregatesFilter>;
  type?: InputMaybe<EnumTransactionMetadataTypeWithAggregatesFilter>;
  value?: InputMaybe<StringWithAggregatesFilter>;
};

export type TransactionMetadataSumAggregate = {
  __typename?: 'TransactionMetadataSumAggregate';
  id?: Maybe<Scalars['Int']>;
  transactionId?: Maybe<Scalars['Int']>;
};

export type TransactionMetadataSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  transactionId?: InputMaybe<SortOrder>;
};

export enum TransactionMetadataType {
  Boolean = 'BOOLEAN',
  Image = 'IMAGE',
  Number = 'NUMBER',
  String = 'STRING'
}

export type TransactionMetadataUpdateInput = {
  Transaction?: InputMaybe<TransactionUpdateOneRequiredWithoutMetadataInput>;
  key?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTransactionMetadataTypeFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TransactionMetadataUpdateManyMutationInput = {
  key?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTransactionMetadataTypeFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TransactionMetadataUpdateManyWithWhereWithoutTransactionInput = {
  data: TransactionMetadataUpdateManyMutationInput;
  where: TransactionMetadataScalarWhereInput;
};

export type TransactionMetadataUpdateManyWithoutTransactionInput = {
  connect?: InputMaybe<Array<TransactionMetadataWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionMetadataCreateOrConnectWithoutTransactionInput>>;
  create?: InputMaybe<Array<TransactionMetadataCreateWithoutTransactionInput>>;
  createMany?: InputMaybe<TransactionMetadataCreateManyTransactionInputEnvelope>;
  delete?: InputMaybe<Array<TransactionMetadataWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TransactionMetadataScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TransactionMetadataWhereUniqueInput>>;
  set?: InputMaybe<Array<TransactionMetadataWhereUniqueInput>>;
  update?: InputMaybe<Array<TransactionMetadataUpdateWithWhereUniqueWithoutTransactionInput>>;
  updateMany?: InputMaybe<Array<TransactionMetadataUpdateManyWithWhereWithoutTransactionInput>>;
  upsert?: InputMaybe<Array<TransactionMetadataUpsertWithWhereUniqueWithoutTransactionInput>>;
};

export type TransactionMetadataUpdateWithWhereUniqueWithoutTransactionInput = {
  data: TransactionMetadataUpdateWithoutTransactionInput;
  where: TransactionMetadataWhereUniqueInput;
};

export type TransactionMetadataUpdateWithoutTransactionInput = {
  key?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTransactionMetadataTypeFieldUpdateOperationsInput>;
  value?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type TransactionMetadataUpsertWithWhereUniqueWithoutTransactionInput = {
  create: TransactionMetadataCreateWithoutTransactionInput;
  update: TransactionMetadataUpdateWithoutTransactionInput;
  where: TransactionMetadataWhereUniqueInput;
};

export type TransactionMetadataWhereInput = {
  AND?: InputMaybe<Array<TransactionMetadataWhereInput>>;
  NOT?: InputMaybe<Array<TransactionMetadataWhereInput>>;
  OR?: InputMaybe<Array<TransactionMetadataWhereInput>>;
  Transaction?: InputMaybe<TransactionRelationFilter>;
  id?: InputMaybe<IntFilter>;
  key?: InputMaybe<StringFilter>;
  transactionId?: InputMaybe<IntFilter>;
  type?: InputMaybe<EnumTransactionMetadataTypeFilter>;
  value?: InputMaybe<StringFilter>;
};

export type TransactionMetadataWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type TransactionMinAggregate = {
  __typename?: 'TransactionMinAggregate';
  amount?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  dueDate?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  isRecurrent?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  recurrencyPeriod?: Maybe<Scalars['Int']>;
  status?: Maybe<TransactionStatus>;
  type?: Maybe<TransactionType>;
};

export type TransactionMinOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  dueDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isRecurrent?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  recurrencyPeriod?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type TransactionOperation = {
  __typename?: 'TransactionOperation';
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  transaction: Transaction;
  transactionId: Scalars['Int'];
  user: User;
  userId: Scalars['Int'];
};

export type TransactionOperationAvgAggregate = {
  __typename?: 'TransactionOperationAvgAggregate';
  amount?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  transactionId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type TransactionOperationAvgOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  transactionId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TransactionOperationCountAggregate = {
  __typename?: 'TransactionOperationCountAggregate';
  _all: Scalars['Int'];
  amount: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  transactionId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type TransactionOperationCountOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  transactionId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TransactionOperationCreateInput = {
  amount: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  transaction: TransactionCreateNestedOneWithoutOperationsInput;
  user: UserCreateNestedOneWithoutOperationsInput;
};

export type TransactionOperationCreateManyInput = {
  amount: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  transactionId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type TransactionOperationCreateManyTransactionInput = {
  amount: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  userId: Scalars['Int'];
};

export type TransactionOperationCreateManyTransactionInputEnvelope = {
  data: Array<TransactionOperationCreateManyTransactionInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TransactionOperationCreateManyUserInput = {
  amount: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  transactionId: Scalars['Int'];
};

export type TransactionOperationCreateManyUserInputEnvelope = {
  data: Array<TransactionOperationCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type TransactionOperationCreateNestedManyWithoutTransactionInput = {
  connect?: InputMaybe<Array<TransactionOperationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionOperationCreateOrConnectWithoutTransactionInput>>;
  create?: InputMaybe<Array<TransactionOperationCreateWithoutTransactionInput>>;
  createMany?: InputMaybe<TransactionOperationCreateManyTransactionInputEnvelope>;
};

export type TransactionOperationCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<TransactionOperationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionOperationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TransactionOperationCreateWithoutUserInput>>;
  createMany?: InputMaybe<TransactionOperationCreateManyUserInputEnvelope>;
};

export type TransactionOperationCreateOrConnectWithoutTransactionInput = {
  create: TransactionOperationCreateWithoutTransactionInput;
  where: TransactionOperationWhereUniqueInput;
};

export type TransactionOperationCreateOrConnectWithoutUserInput = {
  create: TransactionOperationCreateWithoutUserInput;
  where: TransactionOperationWhereUniqueInput;
};

export type TransactionOperationCreateWithoutTransactionInput = {
  amount: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutOperationsInput;
};

export type TransactionOperationCreateWithoutUserInput = {
  amount: Scalars['Int'];
  createdAt?: InputMaybe<Scalars['DateTime']>;
  transaction: TransactionCreateNestedOneWithoutOperationsInput;
};

export type TransactionOperationGroupBy = {
  __typename?: 'TransactionOperationGroupBy';
  _avg?: Maybe<TransactionOperationAvgAggregate>;
  _count?: Maybe<TransactionOperationCountAggregate>;
  _max?: Maybe<TransactionOperationMaxAggregate>;
  _min?: Maybe<TransactionOperationMinAggregate>;
  _sum?: Maybe<TransactionOperationSumAggregate>;
  amount: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  transactionId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type TransactionOperationListRelationFilter = {
  every?: InputMaybe<TransactionOperationWhereInput>;
  none?: InputMaybe<TransactionOperationWhereInput>;
  some?: InputMaybe<TransactionOperationWhereInput>;
};

export type TransactionOperationMaxAggregate = {
  __typename?: 'TransactionOperationMaxAggregate';
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  transactionId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type TransactionOperationMaxOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  transactionId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TransactionOperationMinAggregate = {
  __typename?: 'TransactionOperationMinAggregate';
  amount?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  transactionId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type TransactionOperationMinOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  transactionId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TransactionOperationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type TransactionOperationOrderByWithAggregationInput = {
  _avg?: InputMaybe<TransactionOperationAvgOrderByAggregateInput>;
  _count?: InputMaybe<TransactionOperationCountOrderByAggregateInput>;
  _max?: InputMaybe<TransactionOperationMaxOrderByAggregateInput>;
  _min?: InputMaybe<TransactionOperationMinOrderByAggregateInput>;
  _sum?: InputMaybe<TransactionOperationSumOrderByAggregateInput>;
  amount?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  transactionId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TransactionOperationOrderByWithRelationInput = {
  amount?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  transaction?: InputMaybe<TransactionOrderByWithRelationInput>;
  transactionId?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum TransactionOperationScalarFieldEnum {
  Amount = 'amount',
  CreatedAt = 'createdAt',
  Id = 'id',
  TransactionId = 'transactionId',
  UserId = 'userId'
}

export type TransactionOperationScalarWhereInput = {
  AND?: InputMaybe<Array<TransactionOperationScalarWhereInput>>;
  NOT?: InputMaybe<Array<TransactionOperationScalarWhereInput>>;
  OR?: InputMaybe<Array<TransactionOperationScalarWhereInput>>;
  amount?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  transactionId?: InputMaybe<IntFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type TransactionOperationScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TransactionOperationScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TransactionOperationScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TransactionOperationScalarWhereWithAggregatesInput>>;
  amount?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  transactionId?: InputMaybe<IntWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type TransactionOperationSumAggregate = {
  __typename?: 'TransactionOperationSumAggregate';
  amount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  transactionId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type TransactionOperationSumOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  transactionId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type TransactionOperationUpdateInput = {
  amount?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  transaction?: InputMaybe<TransactionUpdateOneRequiredWithoutOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutOperationsInput>;
};

export type TransactionOperationUpdateManyMutationInput = {
  amount?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type TransactionOperationUpdateManyWithWhereWithoutTransactionInput = {
  data: TransactionOperationUpdateManyMutationInput;
  where: TransactionOperationScalarWhereInput;
};

export type TransactionOperationUpdateManyWithWhereWithoutUserInput = {
  data: TransactionOperationUpdateManyMutationInput;
  where: TransactionOperationScalarWhereInput;
};

export type TransactionOperationUpdateManyWithoutTransactionInput = {
  connect?: InputMaybe<Array<TransactionOperationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionOperationCreateOrConnectWithoutTransactionInput>>;
  create?: InputMaybe<Array<TransactionOperationCreateWithoutTransactionInput>>;
  createMany?: InputMaybe<TransactionOperationCreateManyTransactionInputEnvelope>;
  delete?: InputMaybe<Array<TransactionOperationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TransactionOperationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TransactionOperationWhereUniqueInput>>;
  set?: InputMaybe<Array<TransactionOperationWhereUniqueInput>>;
  update?: InputMaybe<Array<TransactionOperationUpdateWithWhereUniqueWithoutTransactionInput>>;
  updateMany?: InputMaybe<Array<TransactionOperationUpdateManyWithWhereWithoutTransactionInput>>;
  upsert?: InputMaybe<Array<TransactionOperationUpsertWithWhereUniqueWithoutTransactionInput>>;
};

export type TransactionOperationUpdateManyWithoutUserInput = {
  connect?: InputMaybe<Array<TransactionOperationWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<TransactionOperationCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<TransactionOperationCreateWithoutUserInput>>;
  createMany?: InputMaybe<TransactionOperationCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<TransactionOperationWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<TransactionOperationScalarWhereInput>>;
  disconnect?: InputMaybe<Array<TransactionOperationWhereUniqueInput>>;
  set?: InputMaybe<Array<TransactionOperationWhereUniqueInput>>;
  update?: InputMaybe<Array<TransactionOperationUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<TransactionOperationUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<TransactionOperationUpsertWithWhereUniqueWithoutUserInput>>;
};

export type TransactionOperationUpdateWithWhereUniqueWithoutTransactionInput = {
  data: TransactionOperationUpdateWithoutTransactionInput;
  where: TransactionOperationWhereUniqueInput;
};

export type TransactionOperationUpdateWithWhereUniqueWithoutUserInput = {
  data: TransactionOperationUpdateWithoutUserInput;
  where: TransactionOperationWhereUniqueInput;
};

export type TransactionOperationUpdateWithoutTransactionInput = {
  amount?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutOperationsInput>;
};

export type TransactionOperationUpdateWithoutUserInput = {
  amount?: InputMaybe<IntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  transaction?: InputMaybe<TransactionUpdateOneRequiredWithoutOperationsInput>;
};

export type TransactionOperationUpsertWithWhereUniqueWithoutTransactionInput = {
  create: TransactionOperationCreateWithoutTransactionInput;
  update: TransactionOperationUpdateWithoutTransactionInput;
  where: TransactionOperationWhereUniqueInput;
};

export type TransactionOperationUpsertWithWhereUniqueWithoutUserInput = {
  create: TransactionOperationCreateWithoutUserInput;
  update: TransactionOperationUpdateWithoutUserInput;
  where: TransactionOperationWhereUniqueInput;
};

export type TransactionOperationWhereInput = {
  AND?: InputMaybe<Array<TransactionOperationWhereInput>>;
  NOT?: InputMaybe<Array<TransactionOperationWhereInput>>;
  OR?: InputMaybe<Array<TransactionOperationWhereInput>>;
  amount?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  transaction?: InputMaybe<TransactionRelationFilter>;
  transactionId?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type TransactionOperationWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type TransactionOrderByWithAggregationInput = {
  _avg?: InputMaybe<TransactionAvgOrderByAggregateInput>;
  _count?: InputMaybe<TransactionCountOrderByAggregateInput>;
  _max?: InputMaybe<TransactionMaxOrderByAggregateInput>;
  _min?: InputMaybe<TransactionMinOrderByAggregateInput>;
  _sum?: InputMaybe<TransactionSumOrderByAggregateInput>;
  amount?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  dueDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isRecurrent?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  recurrencyPeriod?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type TransactionOrderByWithRelationInput = {
  amount?: InputMaybe<SortOrder>;
  assignees?: InputMaybe<TransactionAssigneeOrderByRelationAggregateInput>;
  description?: InputMaybe<SortOrder>;
  dueDate?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isRecurrent?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<TransactionMetadataOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  operations?: InputMaybe<TransactionOperationOrderByRelationAggregateInput>;
  recurrencyPeriod?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type TransactionRelationFilter = {
  is?: InputMaybe<TransactionWhereInput>;
  isNot?: InputMaybe<TransactionWhereInput>;
};

export enum TransactionScalarFieldEnum {
  Amount = 'amount',
  Description = 'description',
  DueDate = 'dueDate',
  Id = 'id',
  IsRecurrent = 'isRecurrent',
  Name = 'name',
  RecurrencyPeriod = 'recurrencyPeriod',
  Status = 'status',
  Type = 'type'
}

export type TransactionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<TransactionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<TransactionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<TransactionScalarWhereWithAggregatesInput>>;
  amount?: InputMaybe<IntWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  dueDate?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  isRecurrent?: InputMaybe<BoolWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  recurrencyPeriod?: InputMaybe<IntNullableWithAggregatesFilter>;
  status?: InputMaybe<EnumTransactionStatusWithAggregatesFilter>;
  type?: InputMaybe<EnumTransactionTypeWithAggregatesFilter>;
};

export enum TransactionStatus {
  Cancelled = 'CANCELLED',
  Overdue = 'OVERDUE',
  Paid = 'PAID',
  Pending = 'PENDING'
}

export type TransactionSumAggregate = {
  __typename?: 'TransactionSumAggregate';
  amount?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  recurrencyPeriod?: Maybe<Scalars['Int']>;
};

export type TransactionSumOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  recurrencyPeriod?: InputMaybe<SortOrder>;
};

export enum TransactionType {
  Expense = 'EXPENSE',
  Income = 'INCOME'
}

export type TransactionUpdateInput = {
  amount?: InputMaybe<IntFieldUpdateOperationsInput>;
  assignees?: InputMaybe<TransactionAssigneeUpdateManyWithoutTransactionInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  isRecurrent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  metadata?: InputMaybe<TransactionMetadataUpdateManyWithoutTransactionInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  operations?: InputMaybe<TransactionOperationUpdateManyWithoutTransactionInput>;
  recurrencyPeriod?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumTransactionStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTransactionTypeFieldUpdateOperationsInput>;
};

export type TransactionUpdateManyMutationInput = {
  amount?: InputMaybe<IntFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  isRecurrent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recurrencyPeriod?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumTransactionStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTransactionTypeFieldUpdateOperationsInput>;
};

export type TransactionUpdateOneRequiredWithoutAssigneesInput = {
  connect?: InputMaybe<TransactionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TransactionCreateOrConnectWithoutAssigneesInput>;
  create?: InputMaybe<TransactionCreateWithoutAssigneesInput>;
  update?: InputMaybe<TransactionUpdateWithoutAssigneesInput>;
  upsert?: InputMaybe<TransactionUpsertWithoutAssigneesInput>;
};

export type TransactionUpdateOneRequiredWithoutMetadataInput = {
  connect?: InputMaybe<TransactionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TransactionCreateOrConnectWithoutMetadataInput>;
  create?: InputMaybe<TransactionCreateWithoutMetadataInput>;
  update?: InputMaybe<TransactionUpdateWithoutMetadataInput>;
  upsert?: InputMaybe<TransactionUpsertWithoutMetadataInput>;
};

export type TransactionUpdateOneRequiredWithoutOperationsInput = {
  connect?: InputMaybe<TransactionWhereUniqueInput>;
  connectOrCreate?: InputMaybe<TransactionCreateOrConnectWithoutOperationsInput>;
  create?: InputMaybe<TransactionCreateWithoutOperationsInput>;
  update?: InputMaybe<TransactionUpdateWithoutOperationsInput>;
  upsert?: InputMaybe<TransactionUpsertWithoutOperationsInput>;
};

export type TransactionUpdateWithoutAssigneesInput = {
  amount?: InputMaybe<IntFieldUpdateOperationsInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  isRecurrent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  metadata?: InputMaybe<TransactionMetadataUpdateManyWithoutTransactionInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  operations?: InputMaybe<TransactionOperationUpdateManyWithoutTransactionInput>;
  recurrencyPeriod?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumTransactionStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTransactionTypeFieldUpdateOperationsInput>;
};

export type TransactionUpdateWithoutMetadataInput = {
  amount?: InputMaybe<IntFieldUpdateOperationsInput>;
  assignees?: InputMaybe<TransactionAssigneeUpdateManyWithoutTransactionInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  isRecurrent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  operations?: InputMaybe<TransactionOperationUpdateManyWithoutTransactionInput>;
  recurrencyPeriod?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumTransactionStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTransactionTypeFieldUpdateOperationsInput>;
};

export type TransactionUpdateWithoutOperationsInput = {
  amount?: InputMaybe<IntFieldUpdateOperationsInput>;
  assignees?: InputMaybe<TransactionAssigneeUpdateManyWithoutTransactionInput>;
  description?: InputMaybe<StringFieldUpdateOperationsInput>;
  dueDate?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  isRecurrent?: InputMaybe<BoolFieldUpdateOperationsInput>;
  metadata?: InputMaybe<TransactionMetadataUpdateManyWithoutTransactionInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  recurrencyPeriod?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  status?: InputMaybe<EnumTransactionStatusFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumTransactionTypeFieldUpdateOperationsInput>;
};

export type TransactionUpsertWithoutAssigneesInput = {
  create: TransactionCreateWithoutAssigneesInput;
  update: TransactionUpdateWithoutAssigneesInput;
};

export type TransactionUpsertWithoutMetadataInput = {
  create: TransactionCreateWithoutMetadataInput;
  update: TransactionUpdateWithoutMetadataInput;
};

export type TransactionUpsertWithoutOperationsInput = {
  create: TransactionCreateWithoutOperationsInput;
  update: TransactionUpdateWithoutOperationsInput;
};

export type TransactionWhereInput = {
  AND?: InputMaybe<Array<TransactionWhereInput>>;
  NOT?: InputMaybe<Array<TransactionWhereInput>>;
  OR?: InputMaybe<Array<TransactionWhereInput>>;
  amount?: InputMaybe<IntFilter>;
  assignees?: InputMaybe<TransactionAssigneeListRelationFilter>;
  description?: InputMaybe<StringFilter>;
  dueDate?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IntFilter>;
  isRecurrent?: InputMaybe<BoolFilter>;
  metadata?: InputMaybe<TransactionMetadataListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  operations?: InputMaybe<TransactionOperationListRelationFilter>;
  recurrencyPeriod?: InputMaybe<IntNullableFilter>;
  status?: InputMaybe<EnumTransactionStatusFilter>;
  type?: InputMaybe<EnumTransactionTypeFilter>;
};

export type TransactionWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  assignees: Array<TransactionAssignee>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  operations: Array<TransactionOperation>;
  password: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};


export type UserAssigneesArgs = {
  cursor?: InputMaybe<TransactionAssigneeWhereUniqueInput>;
  distinct?: InputMaybe<Array<TransactionAssigneeScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TransactionAssigneeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionAssigneeWhereInput>;
};


export type UserOperationsArgs = {
  cursor?: InputMaybe<TransactionOperationWhereUniqueInput>;
  distinct?: InputMaybe<Array<TransactionOperationScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<TransactionOperationOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<TransactionOperationWhereInput>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type UserAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserCount = {
  __typename?: 'UserCount';
  assignees: Scalars['Int'];
  operations: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  password: Scalars['Int'];
  updatedAt: Scalars['Int'];
  username: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  assignees?: InputMaybe<TransactionAssigneeCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  operations?: InputMaybe<TransactionOperationCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  password: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserCreateNestedOneWithoutAssigneesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAssigneesInput>;
  create?: InputMaybe<UserCreateWithoutAssigneesInput>;
};

export type UserCreateNestedOneWithoutOperationsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutOperationsInput>;
  create?: InputMaybe<UserCreateWithoutOperationsInput>;
};

export type UserCreateOrConnectWithoutAssigneesInput = {
  create: UserCreateWithoutAssigneesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutOperationsInput = {
  create: UserCreateWithoutOperationsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAssigneesInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  operations?: InputMaybe<TransactionOperationCreateNestedManyWithoutUserInput>;
  password: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserCreateWithoutOperationsInput = {
  assignees?: InputMaybe<TransactionAssigneeCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  name: Scalars['String'];
  password: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  name: Scalars['String'];
  password: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  assignees?: InputMaybe<TransactionAssigneeOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  operations?: InputMaybe<TransactionOperationOrderByRelationAggregateInput>;
  password?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  UpdatedAt = 'updatedAt',
  Username = 'username'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  username?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type UserSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserUpdateInput = {
  assignees?: InputMaybe<TransactionAssigneeUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  operations?: InputMaybe<TransactionOperationUpdateManyWithoutUserInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutAssigneesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAssigneesInput>;
  create?: InputMaybe<UserCreateWithoutAssigneesInput>;
  update?: InputMaybe<UserUpdateWithoutAssigneesInput>;
  upsert?: InputMaybe<UserUpsertWithoutAssigneesInput>;
};

export type UserUpdateOneRequiredWithoutOperationsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutOperationsInput>;
  create?: InputMaybe<UserCreateWithoutOperationsInput>;
  update?: InputMaybe<UserUpdateWithoutOperationsInput>;
  upsert?: InputMaybe<UserUpsertWithoutOperationsInput>;
};

export type UserUpdateWithoutAssigneesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  operations?: InputMaybe<TransactionOperationUpdateManyWithoutUserInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutOperationsInput = {
  assignees?: InputMaybe<TransactionAssigneeUpdateManyWithoutUserInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  password?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutAssigneesInput = {
  create: UserCreateWithoutAssigneesInput;
  update: UserUpdateWithoutAssigneesInput;
};

export type UserUpsertWithoutOperationsInput = {
  create: UserCreateWithoutOperationsInput;
  update: UserUpdateWithoutOperationsInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  assignees?: InputMaybe<TransactionAssigneeListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
  operations?: InputMaybe<TransactionOperationListRelationFilter>;
  password?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
  username?: InputMaybe<Scalars['String']>;
};
